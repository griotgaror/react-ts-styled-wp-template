import React from 'react';
import * as Style from './button.style';

import Img from '../image/image';

interface ButtonProps {
    className?: string;
    type?: 'submit';
    onClick?: () => void;
    txt?: string;
    icon?: string;
    isDisable?: boolean;
    color?: string;
}

export default function Button({
    className,
    type,
    txt,
    onClick,
    isDisable,
    icon,
    color,
}: ButtonProps) {
    return (
        <Style._Button
            className={`${className || ''} ${isDisable ? 'disabled' : ''}`}
            type={type}
            onClick={onClick}
            disabled={isDisable}
            color={color}
        >
            {txt}
            {icon && (
                <Img
                    className='small'
                    src={icon}
                />
            )}
        </Style._Button>
    );
}
