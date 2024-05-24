import Logo from '@/components/logo/logo';
import React from 'react';
import * as Style from './header.style';

export default function Header() {
    return (
        <Style._Header>
            <Logo />
        </Style._Header>
    );
}
