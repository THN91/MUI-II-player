import * as React from 'react';

import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import './style.css';

import PlayerCard from './PlayerCard/PlayerCard';
import {ColorModeContext, useMode} from './styles/theme';


export default function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <div>
                        <PlayerCard/>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
}
