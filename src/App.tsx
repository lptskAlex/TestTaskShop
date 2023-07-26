import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import {MainStack} from './routes/router';
import {createTheme} from './utils/theme';
import {persistor, store} from './redux/store';

function App(): JSX.Element {
  const theme = useMemo(() => createTheme({isDark: false}), []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
