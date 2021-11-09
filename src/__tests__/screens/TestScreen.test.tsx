// NOTE: This test is just for practicing/learning
import React from 'react';

import { render } from '@testing-library/react-native';
import TestScreen from '~/screens/testScreen';

describe('TestScreen tests', () => {
  it('should show input name with placeholder "Name" correctly', () => {
    const { getByPlaceholderText } = render(<TestScreen />);
    const inputName = getByPlaceholderText('Name');

    expect(inputName).toBeTruthy();
  });

  it('should show screen title correctly', () => {
    const { getByTestId } = render(<TestScreen />);
    const screenTitle = getByTestId('screen-title');

    expect(screenTitle.props.children).toEqual('Test Screen');
  });
});
