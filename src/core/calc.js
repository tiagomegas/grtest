/*
  Js, Global Object, Intl:
  Mozilla Documentation: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl
*/

const Calc = {
  /**
   * @params
   *  isExtra       : Bool, if the product is an extra or not
   *  product       : Obj, main Product/Extra obj
   *  subscription  : Integer, index of the selected subscription
   *  subscriptions : Array of Objs, Array of all subscriptions
   *  extras        : Array of Ints, Array of all the indexs of the selected extras
   *  extrasList    : Array of Objs, Array of all the extras
   *  extrasAmounts : Array of Ints, Array of all of selected selected extras, followers same index order of extrasList
   */
  calcPrice: function(isExtra, product, subscription, extras, extrasList, extrasAmounts) {
    let leasingTotal = 0;
    leasingTotal = (isExtra) ? product.accessoryPrices[0].price :
     product.deviceSubscriptions[subscription].devicePrice;

    // Pricing with extras
    if (extrasList) {
      for (let i = 0; i < extrasList.length; i += 1) {
        leasingTotal += extrasList[i].value;
      }
    }

    return leasingTotal;
  },

  formatPrice: function(locale, currency, value) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
  },

  calcValuesArray : function (discounts) {
    let value = 0;
    for (let i = 0; i < discounts.length; i += 1) {
      value += +discounts[i].value;
    }
    return value;
  },

  calcTotalOfArray: function (array){
    let total = 0;
    for(let i=0; i<array.length;i++){
      total += array[i].value * (array[i].quantity ? array[i].quantity : 1)
    }
    return total;
  },

  calcMonthlyPrice: function (totalPrice, extras, discounts, months ){
    let totalExtras = this.calcTotalOfArray(extras);
    let totalDiscounts = this.calcTotalOfArray(discounts);
    return (totalPrice) + ((totalExtras - totalDiscounts) / months)
  }
};


export default Calc;
