import React from 'react'

const Button = ({ color, label, onClick }) => {
    const buttonStyle = {
        backgroundColor: color,
        border: 'none',
        padding: '10px 60px',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    }

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    )
}
export default Button