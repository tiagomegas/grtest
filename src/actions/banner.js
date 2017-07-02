import {
  SET_FIELD,
  SAVE_REQUEST,
  /*SET_FIELD_OF_OBJECT,
  SET_FIELD_OF_OBJECT_IN_ARRAY,
  RESET_FLOW,
  SELECT_PRODUCT,*/
} from '../constants';

/*                         */
/* Leasing Flow Actions   */
/*                       */

export function setField(field, value) {
  return {
    type: SET_FIELD,
    field,
    value,
  };
}

export function saveRequest(data) {
  return {
    type: SAVE_REQUEST,
    cinemas: data.cinemas,
    showtimes: data.showtimes
  };
}


/*export function resetFlow() {
  return {
    type: RESET_FLOW,
  };
}

export function cancelFlow() {
  return {
    type: CANCEL_FLOW,
  };
}

export function selectProduct(value) {
  return {
    type: SELECT_PRODUCT,
    value,
  };
}

export function setFieldOfObject(object, attribute, value) {
  return {
    type: SET_FIELD_OF_OBJECT,
    object,
    attribute,
    value,
  };
}

export function setFieldOfObjectInArray(array, index, attribute, value) {
  return {
    type: SET_FIELD_OF_OBJECT_IN_ARRAY,
    index,
    attribute,
    array,
    value,
  };
}
*/
