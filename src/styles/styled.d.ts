import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        theme: string,

        color: {
            primary: string,
            secondary: string,
            tertiary: string,
            warning: string,
            success: string,
            info: string,
            danger: string,
            black: string,
            white: string,
        }
    }
}