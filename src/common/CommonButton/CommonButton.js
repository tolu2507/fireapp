import React from 'react'
import { Button } from '@mui/material'

const CommonButton = ({children, color,variant,sx,disabled,size}) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
        >
            {children}
        </Button>
    )
}

export {CommonButton}
