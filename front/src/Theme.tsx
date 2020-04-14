import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main:"#0277bd"
        },
        secondary: {
            main: "#f44336",
        }
    },
});

export default function withTheme(Component: React.ComponentType) {
    return () => (
        <ThemeProvider theme={theme}>
            <Component />
        </ThemeProvider>
    )
}