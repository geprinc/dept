import React, { ReactNode } from 'react';
import { CommonActions } from '@react-navigation/native';
import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { navigationRef } from '@app/components/AppNavigator/helper';

export function inferRoute(NavigationStructure: any) {
  return function screenComponent(screenName: Routes, component: ReactNode) {
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={component}
        options={appScreensNavOptions[screenName]}
      />
    );
  };
}

export const onResetStack = (
  navigation: Navigation['navigation'],
  nextRoutes: { name: string; params?: any }[],
  initialRoute = Routes.DateList
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: initialRoute }, ...nextRoutes]
    })
  );
};

export const resetToScreen = (name: string) => {
  navigationRef?.current?.reset({
    index: 0,
    routes: [{ name }]
  });
};