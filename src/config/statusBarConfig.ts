import { StatusBar, Platform } from 'react-native';

if (Platform.OS === "android") {
	StatusBar.setBackgroundColor('#171c2b');
}

StatusBar.setBarStyle('light-content');
