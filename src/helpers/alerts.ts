import { Alert } from 'react-native';

export const showErrorAlert = (title: string = 'Oops!', message: string) => {
  Alert.alert(title, message);
};