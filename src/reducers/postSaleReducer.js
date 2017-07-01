import {
  SET_FIELD,
  SET_FIELD_OF_OBJECT,
  SET_FIELD_OF_OBJECT_IN_ARRAY,
  RESET_FLOW
} from '../constants';

let initState = {
  pagination: 0,
  "customer": {
    "civicNumber": "123123",
    "firstName": "Tiago",
    "lastName": "Magalhães",
    "addressStreetLine1": "Rua das Oliveiras",
    "addressStreetLine2": "",
    "addressCity": "Porto",
    "addressCountryISO": "",
    "addressZip": "1234-112",
    "city": "Porto",
    "email": "tiagos.megas@gmaile.com",
    "mobilePhone": "9197823423",
    "kyc": ""
  },
  "vendor": {
    "firstName": 'Thomas Brolin',
    "lastName": "",
    "name": 'Spaceworld Soundgarden Oslo Storgata',
    "city": "Oslo",
    "zipCode": "1234-112",
    "email": 'oslotorgata@swsg.no'
  },
  agreements: [{
    store:{
      vendor: 'Thomas Brolin',
      order_number: '222333666',
      name: 'Spaceworld Soundgarden Oslo Storgata',
      city: 'Oslo',
      zipCode: '1234-112',
      country: 'Norway',
      phone: '+47 979 92 361',
      email: 'oslotorgata@swsg.no'
    },
    order_number: '222333666',
    device: 'Apple iPhone 7 32 GB - Gold',
    start_date: '18/04/2017',
    expiry_date: '18/04/2018',
    amount_financed: '3 499,00 Kr',
    monthly_payment: '199',
    debt: '2 897,00 Kr',
    currency: 'NOK',
    imei: 12319028390
  },{
    store:{
      vendor: 'Thomas Brolin',
      order_number: '222333666' ,
      name: 'Spaceworld Soundgarden Oslo Storgata',
      phone: '+47 979 92 361',
      email: 'oslotorgata@swsg.no'
    },
    order_number: '222333666' ,
    device: 'Samsung S8 White' ,
    start_date: '03/27/2017',
    expiry_date: '03/27/2018',
    amount_financed: '3 001,00 Kr',
    monthly_payment: '199',
    debt: '1 400,00 Kr',
    currency: 'NOK',
    imei: 12319028390
  }],
  /*agreement: {
    store:{
      order_number: '222333666' ,
      name: 'Spaceworld Soundgarden Oslo Storgata',
      phone: '+47 979 92 361',
      email: 'oslotorgata@swsg.no'
    },
    product: {
      description: 'Apple iPhone 7 32 GB - Gold' ,
      // start date: 01/17/2017 - 1484611200
      // test date : 03/27/2017 - 1490572800
      // test date: 04/27/2016 - 1461715200
      // 04/05/2017 - 1491350400
      // 04/20/2017 - 1492646400
      start_date: '1490572800',
      //expiry_date: 01/17/2018
      expiry_date: '1516147200',
      amount_financed: '3 499,00 Kr',
      debt: '2 897,00 Kr',
      monthly_payment: '199',
      currency: 'NOK'
    },
    imei: 12319028390
  }*/
  selectedAgreement: 0,
  kyc: ""
};

const postSale = (state = initState, action) => {
  switch (action.type) {
    case SET_FIELD:{
      let obj = {};
      obj[action.field] = action.value;
      return Object.assign({},state,obj)
    }
    case SET_FIELD_OF_OBJECT:{
      console.log('cenas');
      let obj = {}, newObject={};
      let tempObj = state[action.object];
      obj[action.attribute] = action.value;
      newObject = Object.assign({},tempObj,obj);
      let newFinalObj = {};
      newFinalObj[action.object] = newObject;
      return Object.assign({},state,newFinalObj)
    }
    case SET_FIELD_OF_OBJECT_IN_ARRAY:{
      let newArray = state[action.array].slice();
      let obj = {}, newObject={}, newState={};
      obj[action.attribute] = action.value;
      newObject = Object.assign({},newArray[action.index],obj);
      newArray[action.index] = newObject;
      newState[action.array] = newArray;
      return Object.assign({},state,newState)
    }
    case RESET_FLOW:{
      return initState;
    }
    default:
      return state
  }
}

export default postSale
