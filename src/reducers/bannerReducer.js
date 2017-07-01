import {
  SET_FIELD,
  SET_FIELD_OF_OBJECT,
  RESET_FLOW,
  CANCEL_FLOW,
  SELECT_PRODUCT,
} from '../constants';

const initState = {
    viewIdx: 0,
  }


const leasingFlow = (state = initState, action) => {
  switch (action.type) {
    case SET_FIELD:{
      let obj = {};
      obj[action.field] = action.value;
      return Object.assign({},state,obj)
    }
    case SET_FIELD_OF_OBJECT:{
      let obj = {}, newObject={};
      let tempObj = state[action.object];
      obj[action.attribute] = action.value;
      newObject = Object.assign({},tempObj,obj);
      let newFinalObj = {};
      newFinalObj[action.object] = newObject;
      return Object.assign({},state,newFinalObj)
    }
    case RESET_FLOW: {
      return initState;
    }
    case CANCEL_FLOW: {
      const obj = {
        productList: state.productList,
      };
      return Object.assign({}, initState, obj);
    }
    case SELECT_PRODUCT: {
      const obj = {
        pagination: {
          visitedSteps: 0,
          paginationIdx: 0,
        },
        selectedProduct: action.value,
        selectedExtras: [],
        selectedPayment: null,
        selectedSubscription: 0,
        extrasAmount: [],
        extrasList: [],
        productImei: {
          imeiKey: '',
          validImei: false,
        },
      };
      return Object.assign({}, state, obj);
    }
    default:
      return state;
  }
};


export default leasingFlow;
