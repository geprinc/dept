import { Dispatch } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { Date, DateData } from './datesInterfaces';

export interface Action<T = null, P = null, K = null> {
  [key: string]: any;
  type: string;
  target?: string;
  payload?: T;
  key?: string;
  index?: number;
  service?: Function;
  injections?: any[];
  successSelector?: (response: ApiOkResponse<P>) => K;
  failureSelector?: (response: ApiErrorResponse<P>) => K;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
  dispatch: Dispatch<Action<T, P, K>>,
  getState: () => State
) => void;

export interface DatesState {
  dates: Date[];
  datesLoading: boolean;
  datesError: string;
  date: DateData[];
  dateLoading: boolean;
  dateError: string;
  selectedDate: string;
}
export interface AuthState {
  initialLoading: boolean;
}

export interface State {
  auth: AuthState;
  dates: DatesState;
}

export interface ReduxObject {
  getState: () => State;
}
