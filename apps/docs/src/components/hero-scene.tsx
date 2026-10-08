import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

type PanelSpec = {
  position: [number, number, number]
  rotation: [number, number, number]
  width: number
  height: number
  depth: number
  radius: number
  phase: number
  bob: number
}

const PANELS: PanelSpec[] = [
  { position: [2.6, 1.5, -2.4], rotation: [0.1, -0.35, 0.06], width: 2.6, height: 1.6, depth: 0.1, radius: 0.24, phase: 0, bob: 0.12 },
  { position: [-2.9, 0.7, -2.0], rotation: [0.08, 0.42, -0.08], width: 2.2, height: 1.45, depth: 0.1, radius: 0.22, phase: 1.1, bob: 0.1 },
  { position: [-2.4, -2.3, -3.0], rotation: [-0.05, 0.3, 0.1], width: 2.8, height: 1.7, depth: 0.1, radius: 0.26, phase: 2.3, bob: 0.14 },
  { position: [2.9, -2.5, -3.6], rotation: [0.06, -0.25, -0.07], width: 2.4, height: 1.5, depth: 0.1, radius: 0.22, phase: 3.4, bob: 0.16 },
  { position: [-3.8, 2.4, -4.0], rotation: [0.12, 0.55, 0.05], width: 1.9, height: 1.25, depth: 0.1, radius: 0.2, phase: 4.2, bob: 0.11 },
  { position: [3.9, 0.4, -3.6], rotation: [0.05, -0.5, 0.08], width: 1.8, height: 2.4, depth: 0.1, radius: 0.22, phase: 5, bob: 0.13 },
  { position: [-1.4, 2.9, -3.6], rotation: [0.15, 0.15, -0.1], width: 2.0, height: 1.3, depth: 0.1, radius: 0.2, phase: 0.6, bob: 0.09 },
  { position: [0.4, -3.1, -4.4], rotation: [-0.08, -0.1, 0.06], width: 3.0, height: 1.4, depth: 0.1, radius: 0.24, phase: 1.8, bob: 0.12 },
]

function hex2(n: number): string {
  return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0")
}

function resolveBrandColor(): string | null {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--color-brand").trim()
  if (/^#[0-9a-f]{3,8}$/i.test(raw)) return raw
  if (!raw) return null
  try {
    const ctx = document.createElement("canvas").getContext("2d")
    if (ctx) {
      ctx.fillStyle = "#010203"
      ctx.fillStyle = raw
      const out = ctx.fillStyle
      if (out.toLowerCase() !== "#010203" && /^#[0-9a-f]{3,8}$/i.test(out)) return out
      const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(out)
      if (m) return `#${hex2(Number(m[1]))}${hex2(Number(m[2]))}${hex2(Number(m[3]))}`
    }
  } catch {
    /* fall through to fallback */
  }
  return null
}

function useBrandColor(): string {
  const [color, setColor] = useState("#158048")
  useEffect(() => {
    const sync = () => {
      const next = resolveBrandColor()
      if (next) setColor(next)
    }
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-tone"],
    })
    return () => observer.disconnect()
  }, [])
  return color
}

function buildPanelGeometry(width: number, height: number, depth: number, radius: number) {
  const x = -width / 2
  const y = -height / 2
  const shape = new THREE.Shape()
  shape.moveTo(x + radius, y)
  shape.lineTo(x + width - radius, y)
  shape.quadraticCurveTo(x + width, y, x + width, y + radius)
  shape.lineTo(x + width, y + height - radius)
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  shape.lineTo(x + radius, y + height)
  shape.quadraticCurveTo(x, y + height, x, y + height - radius)
  shape.lineTo(x, y + radius)
  shape.quadraticCurveTo(x, y, x + radius, y)
  const fill = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.015,
    bevelSegments: 2,
    curveSegments: 8,
  })
  fill.translate(0, 0, -depth / 2)
  const edges = new THREE.EdgesGeometry(fill, 25)
  return { fill, edges }
}

function buildParticles() {
  const count = 110
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 7.5
    positions[i * 3 + 2] = -6 + Math.random() * 6.5
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  return geometry
}

function Constellation({ color, animate }: { color: string; animate: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Group>(null)
  const panelRefs = useRef<Array<THREE.Group | null>>([])
  const pointer = useRef({ x: 0, y: 0 })
  const time = useRef(0)
  const invalidate = useThree((state) => state.invalidate)
  const camera = useThree((state) => state.camera)
  const size = useThree((state) => state.size)

  const panels = useMemo(
    () => PANELS.map((spec) => ({ spec, ...buildPanelGeometry(spec.width, spec.height, spec.depth, spec.radius) })),
    [],
  )
  const particles = useMemo(() => buildParticles(), [])

  useLayoutEffect(() => {
    const aspect = size.width / Math.max(1, size.height)
    const z = aspect >= 0.8 ? 9 : aspect >= 0.55 ? 12 : 20
    camera.position.set(0, 0, z)
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height])

  useEffect(
    () => () => {
      panels.forEach(({ fill, edges }) => {
        fill.dispose()
        edges.dispose()
      })
      particles.dispose()
    },
    [panels, particles],
  )

  useEffect(() => {
    invalidate()
  }, [invalidate, color])

  useEffect(() => {
    if (!animate) return
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / Math.max(1, window.innerWidth)) * 2 - 1
      pointer.current.y = -((event.clientY / Math.max(1, window.innerHeight)) * 2 - 1)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [animate])

  useFrame((_state, delta) => {
    if (!animate || !groupRef.current) return
    time.current += Math.min(delta, 0.05)
    const t = time.current
    const group = groupRef.current
    const ease = Math.min(1, delta * 1.6)
    group.position.x += (pointer.current.x * 0.35 - group.position.x) * ease
    group.position.y += (pointer.current.y * 0.22 - group.position.y) * ease
    group.rotation.y += (pointer.current.x * 0.06 - group.rotation.y) * ease
    group.rotation.x += (-pointer.current.y * 0.04 - group.rotation.x) * ease
    if (ringRef.current) {
      ringRef.current.rotation.y = Math.sin(t * 0.1) * 0.1
    }
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return
      const spec = PANELS[index]
      panel.position.y = spec.position[1] + Math.sin(t * 0.6 + spec.phase) * spec.bob
      panel.rotation.z = spec.rotation[2] + Math.sin(t * 0.35 + spec.phase) * 0.04
      panel.rotation.y = spec.rotation[1] + Math.sin(t * 0.28 + spec.phase) * 0.06
    })
  })

  return (
    <group ref={groupRef}>
      <group ref={ringRef}>
        {panels.map(({ spec, fill, edges }, index) => (
          <group
            key={index}
            ref={(element) => {
              panelRefs.current[index] = element
            }}
            position={spec.position}
            rotation={spec.rotation}
          >
            <mesh geometry={fill}>
              <meshStandardMaterial
                color={color}
                transparent
                opacity={0.14}
                roughness={0.5}
                metalness={0.05}
                depthWrite={false}
              />
            </mesh>
            <lineSegments geometry={edges}>
              <lineBasicMaterial color={color} transparent opacity={0.75} />
            </lineSegments>
          </group>
        ))}
      </group>
      <mesh position={[3.3, -1.5, -1.6]} rotation={[0.6, 0.2, 0.3]}>
        <torusGeometry args={[0.5, 0.16, 16, 48]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.35} />
      </mesh>
      <mesh position={[-3.4, -1.9, -2.0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.28, 0.7, 6, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[3.5, 2.2, -3.0]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} roughness={0.3} />
      </mesh>
      <points geometry={particles}>
        <pointsMaterial
          color={color}
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

export default function HeroScene({ animate }: { animate: boolean }) {
  const color = useBrandColor()
  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={animate ? "always" : "demand"}
      camera={{ position: [0, 0, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} />
      <directionalLight position={[-5, -2, 2]} intensity={0.4} />
      <pointLight position={[0, 0, -2]} intensity={6} distance={10} color={color} />
      <Constellation color={color} animate={animate} />
    </Canvas>
  )
}
