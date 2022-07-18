import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import { RoutesParamList } from '@constants/routesParamList';
import { appStackNavConfig} from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import DatesList from '@app/screens/DatesList';
import DateDetail from '@app/screens/DateDetail';

const Stack = createStackNavigator<RoutesParamList>();

function AppStack() {
  return (
    <>
      {inferRoute(Stack)(Routes.DateList, DatesList)}
      {inferRoute(Stack)(Routes.DateData, DateDetail)}
    </>
  );
}

const Navigator = () => {
  return (
    <Stack.Navigator {...appStackNavConfig}>
      {AppStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
