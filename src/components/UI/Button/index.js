
import React from 'react'
function Button({ className, children, onClick }) {
    return (
        <button
            className={`btn ${className || ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
