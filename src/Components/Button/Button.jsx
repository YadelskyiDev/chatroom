import React from 'react'
import classes from './Button.module.css'

export const Button = ({children, className, ...rest}) => (
    <button className={`${classes.Button} ${className}`} {...rest}>{children}</button>
)


