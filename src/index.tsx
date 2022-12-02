import React from 'react';
import '~/config/statusBarConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { store, persistor } from '~/store';
import Routes from '~/routes';
import codePush from "react-native-code-push";

import theme from '~/styles/globalStyles';

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

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
