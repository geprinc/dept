import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator
} from 'redux-persist-seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { State } from '@interfaces/reduxInterfaces';

import dates from './dates/reducer';
import auth from './auth/reducer';

const transformerConfig = {
  whitelistPerReducer: {
    auth: [
        'currentUser', 'hasAccessOnBoarding', 'duenioSignUp'
    ]
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)]
};

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const reducers = combineReducers({
  auth,
  dates
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

if (__DEV__ && Reactotron.createEnhancer) enhancers.push(Reactotron.createEnhancer(true));

// In DEV mode, we'll create the store through Reactotron
const store = createStore(persistedReducer, compose(...enhancers));

if (__DEV__ && Reactotron.setReduxStore) Reactotron.setReduxStore(store);

export default store;
