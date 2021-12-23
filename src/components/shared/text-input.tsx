import React from 'react'

const TextInput = ({label, value, onChange, placeholder}) => {
    return (
        <div>
            {label}
            <input value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)}></input>
        </div>
    )
}

export default TextInput
