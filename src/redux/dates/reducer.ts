import { DateData } from '@interfaces/datesInterfaces';
import { Action, DatesState } from '@interfaces/reduxInterfaces';
import { getImageURL } from '@utils/datesApiUtils';
import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    dates: null,
    date: null
  },
  ignoredTargets: {
    selectedDate: ''
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_DATES, actions.GET_DATE_DATA],
  override: {
    [actions.SET_SELECTED_DATE]: onReadValue(),
    [actions.SET_DATE_DATA]: onReadValue(),
    [actions.CLEAR_DATE_DETAIL]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
