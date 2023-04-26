import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import lodash from 'lodash';

import { ImagePreview } from '~/components';
import { useAppSelector } from '~/hooks';

import AuthStack from './auth.routes';
import AppStack from './app.routes';

const { Screen, Navigator } = createNativeStackNavigator();

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			AppStack: unknown;
			AuthStack: unknown;
			ImagePreview: { imageUri: string };
		}
	}
}

export default function Routes() {
	const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged(async user => {
			if (!lodash.isEmpty(user)) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={(isAuthenticated && isLoggedIn) ? "AppStack" : "AuthStack"}
			>
				<Screen name="AppStack" component={AppStack} />
				<Screen name="AuthStack" component={AuthStack} />

				<Screen name="ImagePreview" component={ImagePreview} />
			</Navigator>
		</NavigationContainer>
	);
}

