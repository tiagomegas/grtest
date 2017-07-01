import {
  SET_USER_SESSION,
  DEL_USER_SESSION,
} from '../constants';

const initState = {
  address       : null,
  companyName   : "",
  contactNumber : null,
  emailId       : "",
  firstName     : "",
  id            : null,
  lastName      : "",
  middleName    : "",
  mobilePhone   : "",
  roleId        : "",
  session       : "",
  timeZoneId    : null,
  userGuid      : "",
  userId        : "",
  userStores    : []
}
/*
userStores : [{
  id : 1,
  isDefault : 1,
  storeId : 1,
  userId : 231,
  whitelabelStore : {
    email : "noreplay@example.com",
    id : 1,
    name : "Oslo Storgata",
    phone : "33333333",
    status : 1
  }

}]
*/

export default function user(state = initState, action) {
  switch (action.type) {
    case SET_USER_SESSION: {
      return action.payload;
    }
    case DEL_USER_SESSION: {
      return initState;
    }
    default:
      return state;
  }
}
