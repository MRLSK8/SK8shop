import React from 'react';
import '~/config/statusBarConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { store, persistor } from '~/store';
import Routes from '~/routes';

import theme from '~/styles/globalStyles';

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

export default App;
