import * as React from "react"
import { cn } from "../lib/cn"
import { Label } from "./label"

/**
 * Props injected into a Field's render-prop child and meant to be spread
 * onto the control (Input, Textarea, Checkbox, …).
 */
export interface FieldControlProps {
  /** Stable id — pass it to the control; the label points at it. */
  id: string
  /** Space-separated ids of the description and error nodes, if present. */
  "aria-describedby"?: string
  /** Present only when the field has an error. */
  "aria-invalid"?: true
  /** Native required flag when the field is marked required. */
  required?: boolean
  /** Mirrors the Field's disabled prop. */
  disabled?: boolean
}

export interface FieldProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  /** Visible label text. Omit only if the control has its own accessible name. */
  label?: React.ReactNode
  /** Helper text rendered under the control and linked with aria-describedby. */
  description?: React.ReactNode
  /** Validation message rendered under the control. Sets aria-invalid on the control. */
  error?: React.ReactNode
  /** Marks the field required: native flag on the control plus a decorative asterisk. */
  required?: boolean
  /** Disables the control via the injected props. */
  disabled?: boolean
  /** Render the control with the wired-up props: `{(field) => <Input {...field} />}`. */
  children: (field: FieldControlProps) => React.ReactNode
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    { label, description, error, required, disabled, className, children, ...props },
    ref
  ) => {
    const uid = React.useId()
    const controlId = `field-${uid}`
    const errorId = `${controlId}-error`
    const descriptionId = `${controlId}-description`

    const describedBy =
      [error ? errorId : null, description ? descriptionId : null]
        .filter(Boolean)
        .join(" ") || undefined

    const field: FieldControlProps = {
      id: controlId,
      "aria-describedby": describedBy,
      "aria-invalid": error ? true : undefined,
      required: required || undefined,
      disabled: disabled || undefined,
    }

    return (
      <div
        ref={ref}
        data-slot="field"
        data-invalid={error ? true : undefined}
        className={cn("grid gap-2", className)}
        {...props}
      >
        {label != null ? (
          <Label htmlFor={controlId}>
            {label}
            {required ? (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            ) : null}
          </Label>
        ) : null}
        {children(field)}
        {description ? (
          <p
            id={descriptionId}
            data-slot="field-description"
            className="text-xs text-muted-foreground"
          >
            {description}
          </p>
        ) : null}
        {error ? (
          <p
            id={errorId}
            data-slot="field-error"
            className="text-xs font-medium text-destructive"
          >
            {error}
          </p>
        ) : null}
      </div>
    )
  }
)
Field.displayName = "Field"

export interface FieldGroupProps extends React.ComponentPropsWithRef<"div"> {
  /** Accessible name for the group, e.g. "Billing details". */
  label?: string
}

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ label, className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-group"
      role={label ? "group" : undefined}
      aria-label={label}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  )
)
FieldGroup.displayName = "FieldGroup"

export type FieldDescriptionProps = React.ComponentPropsWithRef<"p">

const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      data-slot="field-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
)
FieldDescription.displayName = "FieldDescription"

export type FieldErrorProps = React.ComponentPropsWithRef<"p">

const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      data-slot="field-error"
      className={cn("text-xs font-medium text-destructive", className)}
      {...props}
    />
  )
)
FieldError.displayName = "FieldError"

export { Field, FieldGroup, FieldDescription, FieldError }
