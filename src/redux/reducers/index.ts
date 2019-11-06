import {combineReducers, createStore} from 'redux';

import agilityReducer from './AgilityReducer';

const AppReducers = combineReducers({
  agilityReducer,
});

const rootReducer = (state: any, action: any) => {
  return AppReducers(state, action);
};

let store = createStore(rootReducer);

export default store;
