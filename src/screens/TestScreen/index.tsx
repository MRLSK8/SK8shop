// NOTE: This screem is just for practicing/learning (test)

import React, { useState } from 'react';

import { Text, Button } from 'react-native';
import * as S from './styles';

const TestScreen = () => {
	const [lastName, setLastName] = useState('');
	const [name, setName] = useState('');

	const handleOnPress = (name: string) => {
		console.log(name);
	}

	return (
		<S.Container>
			<Text testID='screen-title'>Test Screen</Text>

			<S.Input
				placeholder="Name"
				onChange={value => setName(value.toString())}
			/>

			<S.Input
				placeholder="Sobrenome"
				onChange={value => setLastName(value.toString())}
			/>

			<Button
				title="Salvar"
				color={"blue"}
				onPress={() => handleOnPress(name + lastName)}
			/>
		</S.Container>
	);
};

export default TestScreen;
