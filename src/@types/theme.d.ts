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

      black: string,
      black100: string,
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