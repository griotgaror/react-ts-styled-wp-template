import React from 'react';
import { ThemeProvider } from 'styled-components';

import { colorModes } from '@/style/colorModes';
import { GlobalStyle } from '@/style/globalStyle';
import { generateStyleConfig } from '@/style/styleConfig';
import { ColorMode } from '@/types/colorMode.types';
import { ReactGenericSetState } from '@/types/types';

interface AppDataStates {
    isGlobalLoading: boolean;
    defaultColorMode: ColorMode;
    activeColorMode: null | string;
}

const initalValues: AppDataStates = {
    isGlobalLoading: false,
    defaultColorMode: 'Default',
    activeColorMode: null,
};

interface AppDataContextProps {
    appDataStates: AppDataStates;
    setAppDataStates: ReactGenericSetState<AppDataStates>;
}

const AppDataContext = React.createContext<AppDataContextProps | null>(null);

interface AppDataProviderProps {
    children: React.ReactNode;
}

export const AppDataProvider = function ({ children }: AppDataProviderProps) {
    const [appDataStates, setAppDataStates] =
        React.useState<AppDataStates>(initalValues);

    const contextValues: AppDataContextProps = {
        appDataStates,
        setAppDataStates,
    };

    const { defaultColorMode, activeColorMode } = appDataStates;
    const isActiveColorMode = activeColorMode && activeColorMode in colorModes;

    const colorMode = isActiveColorMode
        ? (activeColorMode as ColorMode)
        : defaultColorMode;

    const styleConfig = generateStyleConfig(colorMode);

    return (
        <AppDataContext.Provider value={contextValues}>
            <ThemeProvider theme={styleConfig}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </AppDataContext.Provider>
    );
};

export function useAppDataContext(): AppDataContextProps {
    const context = React.useContext(AppDataContext);
    const errorTxt = 'the context must be use in AppDataProvider';

    if (!context) {
        throw new Error(errorTxt);
    }

    return context;
}
