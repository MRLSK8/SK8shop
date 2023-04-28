import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import { Switch } from 'react-native-paper';

import skateboard_dark from '~/assets/lottieFiles/skateboarding-dark.json';
import skateboard_light from '~/assets/lottieFiles/skateboarding-light.json';

import {
	DrawerContentComponentProps,
	createDrawerNavigator,
} from '@react-navigation/drawer';

import { logout } from '~/store/actions/auth/auth.actions';
import BottomTab from './bottom-tabs.routes';
import { useAppDispatch, useTheme } from '~/hooks';

import * as S from './styles';

const { Navigator, Screen } = createDrawerNavigator();

export default function DrawerStack() {
	return (
		<Navigator
			initialRouteName="Feed"
			screenOptions={{
				headerShown: false
			}}
			drawerContent={props => <DrawerContent {...props} />}
		>
			<Screen
				name="Feed"
				component={BottomTab}
			/>
		</Navigator >
	);
}

const DrawerContent = (props: DrawerContentComponentProps) => {
	const { changeTheme, theme, themeName } = useTheme();
	const { reset, navigate } = useNavigation();
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		dispatch(logout());

		auth().signOut();

		reset({
			index: 0,
			routes: [{
				name: 'AuthStack'
			}]
		});
	}

	const handleNavigation = (stack: string, deepStack?: any) => {
		if (deepStack) {
			// @ts-ignore
			navigate(stack, deepStack);
		} else {
			// @ts-ignore
			navigate(stack);
		}
	}

	return (
		<S.DrawerContentContainer {...props}>
			<S.DrawerHeader>
				<S.WrapperAnimated>
					<LottieView
						source={themeName === 'dark' ? skateboard_light : skateboard_dark}
						autoPlay
						loop
					/>
				</S.WrapperAnimated>
			</S.DrawerHeader>
			<S.DrawerItemWrapper
				label={'Home'}
				icon={() =>
					<Feather
						size={22}
						name={'home'}
						color={theme.colors.neutral3}
					/>
				}
				onPress={() =>
					handleNavigation(
						'ProductsStack',
						{ screen: 'Products' }
					)
				}
			/>

			<S.DrawerItemWrapper
				label={'Meus Pedidos'}
				icon={() =>
					<Ionicons
						size={22}
						name={'list-outline'}
						color={theme.colors.neutral3}
					/>
				}
				onPress={() =>
					handleNavigation('MyPurchasesStack')
				}
			/>

			<S.DrawerItemWrapper
				label={'Meu Carrinho'}
				icon={() =>
					<Ionicons
						size={22}
						name={'ios-cart-outline'}
						color={theme.colors.neutral3}
					/>
				}
				onPress={() =>
					handleNavigation('ShoppingCart')
				}
			/>
			<S.SwitchWrapper>
				<Switch
					color={theme.colors.secondary}
					thumbColor={theme.colors.neutral3}
					value={themeName === "dark"}
					style={{ marginHorizontal: 6 }}
					onValueChange={(value) => {
						changeTheme(value ? "dark" : "light");
					}}
				/>

				{themeName === "light" && (
					<S.SwitchLabel>Light</S.SwitchLabel>
				)}

				{themeName === "dark" && (
					<S.SwitchLabel>Dark</S.SwitchLabel>
				)}
			</S.SwitchWrapper>

			<S.DrawerItemWrapperLogOut
				label={'Sair'}
				icon={() =>
					<Feather
						size={22}
						name={'log-out'}
						color={theme.colors.secondary}
					/>
				}
				onPress={handleLogOut}
			/>
		</S.DrawerContentContainer>
	);
};
