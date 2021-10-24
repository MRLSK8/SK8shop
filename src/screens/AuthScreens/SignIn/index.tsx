import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import { useAppDispatch } from '~/hooks/reduxHooks';

import { Container, ButtonText } from './styles';
import { loginAsync } from '~/store/actions/auth/auth.actions';

const SignIn = () => {
  const { reset } = useNavigation();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginAsync('jmdl.k8@gmail.com', '123456'));

    reset({
      index: 0,
      routes: [{
        name: 'AppStack'
      }]
    });
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogin}>
        <ButtonText>SignIn</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default SignIn;
