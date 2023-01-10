import {createContext, useMemo, useState} from 'react';

import {createTheme, PaletteMode} from '@mui/material';

import {colors} from './variables';


export const themeSettings = (mode: PaletteMode) => {
    return {
        palette: {
            mode,
            ...(mode === 'light'
                    ? {
                        primary: {
                            main: colors.light.primary,
                        },
                        secondary: {
                            main: colors.light.text,
                        },
                        background: {
                            default: colors.light.background,
                        },
                    }
                    : {
                        primary: {
                            main: colors.dark.primary,
                        },
                        secondary: {
                            main: colors.dark.text,
                        },
                        background: {
                            default: colors.dark.background,
                        },
                    }
            )
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(','),
            fontSize: 14,
            fontWeight: 400,
            h5: {
                fontSize: 20,
                fontWeight: 500,
            },
            span: {
                fontSize: 16,
                fontWeight: 400,
            },
            div: {
                fontSize: 12,
                fontWeight: 400,
            },
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        width: "50px",
                        height: "50px",
                        "&:hover": {
                            backgroundColor: colors.light.primary,
                            color: colors.light.secondary,
                        },
                    },
                },
            },
        },
    }
}

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
    toggleColorMode: () => {
    }
})

export const useMode = () => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light"))
        }), []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    return [theme, colorMode] as const;
}