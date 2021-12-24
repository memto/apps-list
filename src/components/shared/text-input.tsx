import React from 'react'

const TextInput = ({label, value, onChange, placeholder, className}) => {
    const textInputClass = className ? `field ${className}` : 'field'
    return (
        <div className={textInputClass}>
            <div className="control">
                <label className="label">{label}</label>
                <input 
                    className="input is-primary" 
                    type="text" 
                    value={value} 
                    placeholder={placeholder} 
                    onChange={e => onChange(e.target.value)}></input>            
            </div>
        </div>
    )
}

export default TextInput
