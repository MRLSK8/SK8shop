import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primary100: string,

      secondary: string,
      secondary100: string,

      white: string,
      white100: string,
      white200: string,
      white300: string,

      dark: string,
      dark100: string,
      dark200: string,
    },
    fonts: {
      Ubuntu: {
        BoldItalic: string,
        Regular: string,
        Italic: string,
        Bold: string,
      }
    }
  }
}