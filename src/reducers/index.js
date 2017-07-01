// ----- NPM Dependency --------------------------------------------------------
import { combineReducers } from 'redux';
// ----- Reducers --------------------------------------------------------------
import bannerReducer  from './bannerReducer'
// ----- Do I need this? -------------------------------------------------------
import runtime from './runtime';
import intl from './intl';

export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    bannerReducer,
    runtime,
    intl,
  });
}
