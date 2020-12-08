import React from "react"
import Input from '../Input'

const RenderInputField = ({
  input,
  set,
  label,
  type,
  maxLength,
  placeholder,
  meta,
  title,
  className,
  readOnly,
}) => (
    <Input
      {...input}
      onChange={
        (event) => {
          const value = event.target ? event.target.value : event
          if ((maxLength && value.length <= maxLength) || !maxLength) {
            if (set) set(value)
            input.onChange(event)
          }
        }
      }
      onBlur={(event) => {
        const { target } = event
        const { value } = target
        target.value = value.trim()

        if (input.onBlur) input.onBlur(event)
      }}
      onFocus={(event) => {
        if (input.onFocus) input.onFocus(event)
      }}
      label={label}
      maxLength={maxLength}
      type={type}
      isInvalid={(meta.touched && !meta.active && !!meta.error)}
      error={meta.error}
      placeholder={placeholder}
      title={title}
      className={className}
      readOnly={readOnly}
    />
  )

export default RenderInputField
