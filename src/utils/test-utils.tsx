import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {render} from '@testing-library/react-native';

import {theme} from '@theme/index';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducers} from '@store/reducers';

const customRender = (
  ui: React.ReactElement,
  {store = configureStore({reducer: reducers})} = {},
) => {
  const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
  };
  return render(ui, {wrapper: AllTheProviders});
};

export * from '@testing-library/react-native';

export {customRender as render};
