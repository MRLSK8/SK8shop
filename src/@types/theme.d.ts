import 'styled-components';

import { ITheme } from "~/styles/theme";

declare module 'styled-components/native' {
	export interface DefaultTheme extends ITheme { }
}
