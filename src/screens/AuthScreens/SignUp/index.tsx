import React from 'react';

import auth from '@react-native-firebase/auth';
import { Text } from 'react-native';

import { showErrorAlert } from '~/helpers';

import * as S from './styles';

const SignUp = () => {
	const handleSignUp = async () => {
		try {
			await auth().createUserWithEmailAndPassword("jmdl.k8@gmail.com", "123456");
		} catch (error: any) {
			if (error?.code === 'auth/email-already-in-use') {
				showErrorAlert("Oops!", "Este e-mail já está em uso.");
			} else {
				showErrorAlert("Oops!", "Não foi possível fazer o cadastro. Tente novamente.");
			}
		}
	}

	return (
		<S.Container>
			<Text>SignUp</Text>
			<S.SignUpButton
				testID={'login-btn'}
				onPress={handleSignUp}
			>
				<S.SignUpButtonLabel>
					cadastre-se
				</S.SignUpButtonLabel>
			</S.SignUpButton>
		</S.Container>
	);
};

export default SignUp;
