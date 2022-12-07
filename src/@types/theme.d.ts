import 'styled-components';

import theme from "~/styles/globalStyles";

export type Theme = typeof theme;

declare module 'styled-components/native' {
	export interface DefaultTheme extends Theme { }
}
