import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { dark, light, ITheme } from '~/styles/theme';
import * as themes from '~/styles/theme';

type Themes = keyof typeof themes;

interface IProps {
	theme: ITheme;
	changeTheme: (theme: Themes) => void
}

const themesOptions: Record<Themes, ITheme> = {
	dark,
	light,
}

export const useTheme = create(
	persist(
		immer<IProps>(
			(set) => ({
				theme: dark,
				changeTheme: (theme) => {
					set((state) => {
						state.theme = themesOptions[theme] ?? dark;
					});
				}
			})
		),
		{
			name: "theme-option",
			storage: createJSONStorage(() => AsyncStorage)
		}
	)
)
