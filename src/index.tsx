import React from 'react';
import '~/config/statusBarConfig';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import codePush from "react-native-code-push";
import { Provider } from 'react-redux';

import { store, persistor } from '~/store';
import theme from '~/styles/globalStyles';
import Routes from '~/routes';

const codePushOptions = {
	updateDialog: {
		updateTitle: "You have an update",
		optionalUpdateMessage: "Update available. Install?",
		optionalIgnoreButtonLabel: "Nop",
		optionalInstallButtonLabel: "Yep",
	},
	checkFrequency: codePush.CheckFrequency.ON_APP_START,
	installMode: codePush.InstallMode.IMMEDIATE,
	mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
};

const queryClient = new QueryClient();

const App = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<Routes />
					</ThemeProvider>
				</PersistGate>
			</QueryClientProvider>
		</Provider>
	);
};

export default codePush(codePushOptions)(App);
