import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {ErrorBoundary} from '@components/ErrorBoundary';
import {Navigator} from './navigators';
import {theme} from '@theme/index';
import {store, persistor} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <NavigationContainer>
              <StatusBar
                translucent
                barStyle="default"
                backgroundColor="transparent"
              />
              <Navigator />
            </NavigationContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
