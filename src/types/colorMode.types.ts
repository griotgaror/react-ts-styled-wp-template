import { colorModes } from '@/style/colorModes';

export interface ColorModeConfig {
    bgPrimary: string;
    bgSecondary: string;
    detailColor1: string;
    detailColor2: string;
}

export type ColorMode = keyof typeof colorModes;
