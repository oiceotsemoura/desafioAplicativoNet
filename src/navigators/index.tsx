/* eslint-disable no-console */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthRoutes, Routes} from '@constants/routes';
import {useAppSelector} from '@store/hook';
import * as Screens from '@screens/index';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const state = useAppSelector(appState => appState.auth);
  const isLogged = Boolean(state.token);

  return (
    <Stack.Navigator>
      {isLogged ? (
        <>
          <Stack.Screen name={Routes.HOME} component={Screens.HomeScreen} />
          <Stack.Screen
            name={Routes.DETAILS}
            component={Screens.DetailsScreen}
          />
        </>
      ) : (
        <Stack.Screen name={AuthRoutes.LOGIN} component={Screens.LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
