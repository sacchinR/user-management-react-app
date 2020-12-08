import React, { Component } from "react"
import "./style.scss"

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.name,
    }
  }

  render() {
    const {
      name,
      type,
      label,
      error,
      isInvalid,
      hasPlaceholder,
      value,
      subTitle,
      className,
      readOnly,
      ...props
    } = this.props
    const inputProps = {
      ...props,
      className: `${name} ${className} form-control`,
      value,
      ref: (input) => {
        this.input = input
      },
      type: type || "text",
      id: this.state.id,
      readOnly,
    }
    return (
      <div className="input-fields">
        {label && <label htmlFor={name}>{label}</label>}
        <input {...inputProps} />
        {isInvalid && <small className="text-danger">{error}</small>}
      </div>

    )
  }
}

export default Input
