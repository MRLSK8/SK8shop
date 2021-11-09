// NOTE: This screem is just for practicing/learning (test)

import React, { useState } from 'react';

import { Text, TextInput, Button } from 'react-native';
import { Container } from './styles';

const testScreen = () => {
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');

  const handleOnPress = (name: string) => {
    console.log(name);
  }

  return (
    <Container>
      <Text testID='screen-title'>Test Screen</Text>

      <TextInput
        placeholder="Name"
        onChange={value => setName(value.toString())}
      />
      <TextInput
        placeholder="Sobrenome"
        onChange={value => setLastName(value.toString())}
      />

      <Button
        title="Salvar"
        onPress={() => handleOnPress(name + lastName)}
      />
    </Container>
  );
};

export default testScreen;
