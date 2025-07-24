import React from 'react'
import { ButtonProps } from "@/interfaces";
function Button({ className, text, onClick, disabled, type, size = "medium", shape = "rounded-md" }: ButtonProps) {
    const ButtonSize = {
        small: "text-sm px-2 py-1",
        medium: "text-base px-4 py-2",
        large: "text-lg px-6 py-3"
    }
    const ButtonShape = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-lg": "rounded-lg",
        "rounded-full": "rounded-full"
    }


    return (
        <>
            <button className={`${ButtonSize[size]} ${ButtonShape[shape]} ${className}`} onClick={onClick} disabled={disabled} type={type}>
                {text}
            </button>

        </>
    )
}

export default Button
