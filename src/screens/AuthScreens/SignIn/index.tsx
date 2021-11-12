import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from '~/hooks/reduxHooks';

import { Container, SignInButton, SignInButtonLabel } from './styles';
import { loginAsync } from '~/store/actions/auth/auth.actions';

const signIn = () => {
  const { reset } = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginAsync('teste@gmail.com', '123456'));

    reset({
      index: 0,
      routes: [{
        name: 'AppStack'
      }]
    });
  }

  return (
    <Container>
      <SignInButton
        testID={'login-btn'}
        onPress={handleLogin}
      >
        <SignInButtonLabel>
          Fazer login
        </SignInButtonLabel>
      </SignInButton>
    </Container>
  );
};

export default signIn;
