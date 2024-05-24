import 'styled-components';
import { DefaultTheme } from 'styled-components';

import { ColorMode, ColorModeConfig } from '@/types/colorMode.types';
import { colorModes } from './colorModes';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorMode: ColorModeConfig;
        layout: {
            headerHeight: string;
            borderRadius: string;
            gap: string;
            padding: string;
            buttonSize: string;
        };
        colors: {
            txt: string;
        };
    }
}

export const generateStyleConfig = (colorMode: ColorMode): DefaultTheme => ({
    colorMode: colorModes[colorMode],
    layout: {
        headerHeight: '60px',
        borderRadius: '4px',
        gap: '20px',
        padding: '15px',
        buttonSize: '38px',
    },
    colors: {
        txt: '#D0DBE4',
    },
});
