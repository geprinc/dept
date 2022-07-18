import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Routes from '@constants/routes';

export type RoutesParamList = {
  [Routes.DateData]: { date: string };
};

type TypedParams = keyof RoutesParamList;
export type RouteType<T extends TypedParams> = RouteProp<RoutesParamList, T>;
export type NavigationType<T extends TypedParams> = StackNavigationProp<RoutesParamList, T>;

export function useRouteWithParams<T extends TypedParams>() {
  return useRoute<RouteType<T>>();
}