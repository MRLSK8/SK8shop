import React from 'react';

import auth from '@react-native-firebase/auth';
import { Text } from 'react-native';

import { showErrorAlert } from '~/helpers/alerts';

import {
  SignUpButtonLabel,
  SignUpButton,
  Container,
} from './styles';

const signUp = () => {
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
    <Container>
      <Text>SignUp</Text>
      <SignUpButton
        testID={'login-btn'}
        onPress={handleSignUp}
      >
        <SignUpButtonLabel>
          cadastre-se
        </SignUpButtonLabel>
      </SignUpButton>
    </Container>
  );
};

export default signUp;
