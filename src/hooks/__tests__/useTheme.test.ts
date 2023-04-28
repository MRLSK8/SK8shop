import { act, renderHook } from '@testing-library/react-native';
import { useTheme } from '~/hooks';

describe('Testing useTheme hook', () => {
	it('should start with dark theme as default.', () => {
		const { result } = renderHook(() => useTheme());
		expect(result.current.themeName).toBe("dark");
	});

	it('should be able to change them from dark to light', () => {
		const { result } = renderHook(() => useTheme());
		expect(result.current.themeName).toBe("dark");
		act(() => {
			result.current.changeTheme("light")
		});
		expect(result.current.themeName).toBe("light");
	});

	it('should set theme as dark if a wrong theme param was passed.', () => {
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
