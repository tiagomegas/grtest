import {
  SET_FIELD,
  SET_FIELD_OF_OBJECT,
  RESET_FLOW,
  CANCEL_FLOW,
  SELECT_PRODUCT,
} from '../constants';

const initState = {
  pagination: {
    visitedSteps: 0,
    paginationIdx: 0,
  },
  meta: {
    transactionID: 1,
    clientID: 1,
    storeID: 1,
    sellerID: 1,
  },
  store: {
    vendor: 'Thomas Brolin',
    order_number: '222333666',
    name: 'Spaceworld Soundgarden Oslo Storgata',
    city: 'Oslo',
    zipCode: '1234-112',
    country: 'Norway',
    phone: '+47 979 92 361',
    email: 'oslotorgata@swsg.no',
  },
  customer: {
    civicNumber: '',
    firstName: '',
    lastName: '',
    addressStreetLine1: '',
    addressStreetLine2: '',
    addressCity: '',
    addressCountryISO: '',
    addressZip: '',
    city: '',
    email: '',
    mobilePhone: '',
    kyc: null,
  },
  "credit": {
    //"creditID": null,
    "paymentType": 1,
    "totalAmount": 2000.0,
    "monthlyCost": 200.0,
    "monthlyFlexibleCost": 100.0,
    "signMethod": 0,
    "product": {
      "id": null,
      "name": "",
      "newId": null,
      "price": 0,
      "quantity": 0,
      "residualValue": 0,
      "residualProvider": 0,
      "productType": 0,
      "productIMEI": null
    },
    "additionalProducts": null,
    "discounts": null,
    "idType": 0,
    "idReferenceNumber": "idReferenceNumber"
  },
  productImei : {
    imeiKey   : "",
    validImei : false
  },
  discounts : [],
  selectedProduct      : null,
  selectedExtras       : [],//[1,2,3],
  selectedPayment      : null,
  selectedSubscription : 0,
  productList          : [],
  extrasAmount         : [],
  extrasTypes          : [],
  extrasList           : [],
  subcriptionsList     : [],
  monthlyPayment       : 0,
  questions: [
    ["Hva er formålet med lånet?", -1,
      "Leie av mobiltelefon til egen privat bruk i leieperioden",
      "Leie av mobiltelefon til egen bruk i næringsvirksomhet",
      "Leie av mobiltelefon til bruk for egne barn, ektefelle, registrert partner eller samboer",
      "Annet"],
    ["Hva er opprinnelsen for midlene som skal betjene leasingforpliktelsene?", -1,
      "Midler på egen norsk bankkonto som stammer fra lønn fra norsk arbeidsgiver, norsk offentlig eller privat pensjon, eller norsk trygdeytelse",
      "Midler på egen norsk bankkonto som stammer fra kapitalinntekt (slik som utbytte, rente, gevinst ved salg av formuesgode, etc.) i Norge",
      "Midler på norsk bankkonto i annen persons navn",
      "Midler i eller fra utlandet",
      "Annet"],
    ["Har du eller har du hatt viktig offentlig stilling eller verv i utlandet (politisk eksponert person – PEP), eller er du nærstående eller", -1,
      "Nej",
      "Ja, jeg er en politisk eksponert person",
      "Ja, jeg er i nærstående relasjon eller medarbeider med en politisk eksponert person"]
  ],
  cartId:null
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
