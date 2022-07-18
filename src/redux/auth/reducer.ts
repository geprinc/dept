import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { AuthState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
  },
  ignoredTargets: {
    initialLoading: true
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [],
  override: {
    [actions.AUTH_INIT]: (state: ImmutableObject<AuthState>) =>
      state.merge({
        initialLoading: false
      })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
