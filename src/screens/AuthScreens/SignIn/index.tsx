import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { loginAsync } from '~/store/actions/auth/auth.actions';
import { useAppDispatch } from '~/hooks/reduxHooks';
import { showErrorAlert } from '~/helpers/alerts';
import Divider from '~/components/Divider';
import Loading from '~/components/Loading';

import {
  SignInButtonLabel,
  SignInButton,
  Container,
} from './styles';

const signIn = () => {
  const { reset, navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleNavigationToSignUp = () => {
    // @ts-ignore
    navigate("SignUp");
  }

  const handleSignInAnonymously = async () => {
    try {
      setIsLoading(true);

      await auth().signInAnonymously();

      dispatch(loginAsync('', ''));
      handleNavigationInToTheApp();
    } catch (error) {
      showErrorAlert("Oops!", "Não foi possível fazer o login. Tente novamente.");
      setIsLoading(false);
    }
  }

  const handleNavigationInToTheApp = () => {
    reset({
      index: 0,
      routes: [{
        name: 'AppStack'
      }]
    });
  }

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      await auth().signInWithEmailAndPassword("jmdl.k8@gmail.com", "asdasdf");

      dispatch(loginAsync('jmdl.k8@gmail.com', 'asdasdf'));
      handleNavigationInToTheApp();
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        showErrorAlert("Oops!", "Email ou senha incorretos.");
      } else {
        showErrorAlert("Oops!", "Não foi possível fazer o login. Tente novamente.");
      }
      setIsLoading(false);
    }
  }

  const handleForgotPassword = async () => {
    try {
      await auth().sendPasswordResetEmail("jmdl.k8@gmail.com");
      showErrorAlert("Email enviado!", "Verifique sua caixa de entrada.");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <SignInButton
        testID={'login-btn'}
        onPress={handleLogin}
      >
        <SignInButtonLabel>
          Login
        </SignInButtonLabel>
      </SignInButton>

      <Divider containerWidth={90} text="Esqueceu a senha?" marginVertical={22} />

      <SignInButton
        testID={'login-btn'}
        onPress={handleForgotPassword}
      >
        <SignInButtonLabel>
          Esqueci a senha
        </SignInButtonLabel>
      </SignInButton>

      <Divider containerWidth={90} text="Ou login com" marginVertical={22} />

      <SignInButton
        testID={'login-btn'}
        onPress={handleSignInAnonymously}
      >
        <SignInButtonLabel>
          Login anonymously
        </SignInButtonLabel>
      </SignInButton>

      <Divider containerWidth={90} text="Não tem uma conta? " marginVertical={22} />

      <SignInButton
        testID={'login-btn'}
        onPress={handleNavigationToSignUp}
      >
        <SignInButtonLabel>
          cadastre-se
        </SignInButtonLabel>
      </SignInButton>
    </Container>
  );
};

export default signIn;
