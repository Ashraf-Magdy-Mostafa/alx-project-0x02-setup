import React from 'react'
import { ButtonProps } from "@/interfaces";
function Button({ className, text, onClick, disabled, type }: ButtonProps) {
    return (
        <>
            <button className={className} onClick={onClick} disabled={disabled} type={type}>
                {text}
            </button>

        </>
    )
}

export default Button
