import { light as lightColors } from './light';
import { dark as darkColors } from './dark';

const themeConfigs = {
	fonts: {
		Ubuntu: {
			BoldItalic: 'UbuntuMono-BoldItalic',
			Regular: 'UbuntuMono-Regular',
			Italic: 'UbuntuMono-Italic',
			Bold: 'UbuntuMono-Bold',
		}
	},
}

const light = { ...lightColors, ...themeConfigs };
const dark = { ...darkColors, ...themeConfigs };

export type ITheme = typeof dark;

export {
	light,
	dark,
}
