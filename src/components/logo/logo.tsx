import React from 'react';
import * as Style from './logo.style';

import { assets } from '@/utils/assets';

export default function Logo() {
    return (
        <Style._LogoContainer>
            <Style._Logo src={assets.logo} />
            <Style._LogoTxt>Website Name</Style._LogoTxt>
        </Style._LogoContainer>
    );
}
