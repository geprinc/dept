import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { Action } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes({
    primaryActions: [],
    ignoredActions: ['AUTH_INIT']
  }),
  '@@AUTH'
);

const TARGETS = {
};

export const actionCreators = {
  init: () => async (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: actions.AUTH_INIT
    });
  }};
