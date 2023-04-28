import { act, renderHook } from '@testing-library/react-native';
import { Appearance } from 'react-native';

import { useTheme, defaultThemeName } from '~/hooks';

describe('Testing useTheme hook', () => {
	it("should start with the device's default theme, otherwise set the default dark theme.", () => {
		const { result } = renderHook(() => useTheme());
		expect(result.current.themeName).toBe(Appearance.getColorScheme() || defaultThemeName);
	});

	it('should be able to change theme from dark to light', () => {
		const { result } = renderHook(() => useTheme());
		act(() => {
			result.current.changeTheme("light")
		});
		expect(result.current.themeName).toBe("light");
	});

	it('should set theme to dark if wrong theme parameter is passed.', () => {
		const { result } = renderHook(() => useTheme());
		act(() => {
			result.current.changeTheme("light")
		});
		expect(result.current.themeName).toBe("light");

		act(() => {
			// @ts-ignore
			result.current.changeTheme("wrong-theme")
		});
		expect(result.current.themeName).toBe("dark");
	});
});
