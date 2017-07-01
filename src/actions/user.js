import {
  SET_USER_SESSION,
  DEL_USER_SESSION,
} from '../constants';

export function setUserSession(user) {
  return {
    type: SET_USER_SESSION,
    payload: user
  };
}

export function delUserSession() {
  return {
    type: DEL_USER_SESSION
  };
}
