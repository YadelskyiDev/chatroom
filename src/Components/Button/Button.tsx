import React from 'react'
import classes from './Button.module.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 

}

export const Button: React.FC<IProps> = ({children, className, ...rest}) => (
    <button className={`${classes.Button} ${className}`} {...rest}>{children}</button>
)


