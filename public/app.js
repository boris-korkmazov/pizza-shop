(function(_this){
  _this.somthing =  function(){
    localStorage.clear()
  }

  _this.addToCart = function(id){
    var key = 'product_' + id
    var x = localStorage.getItem(key);
    x = x*1 + 1;
    localStorage.setItem(key, x);
    updateOrdersInput()
    alert("Items in your cart: " + cartGetNumberOfItems())
  }

  var cartGetNumberOfItems = function(){
    var sum = 0
    for(var key in localStorage){
      if(key.indexOf('product_')==0){
        sum += parseInt(localStorage[key])
      }
    }
    return sum
  }

  var updateOrdersInput = function(){
     var order = cartGetOrders()
     $('#order').val(order)
  } 

  var cartGetOrders = function(){
    var str = ''
    for(var key in localStorage){
      if(key.indexOf('product_')==0){
        str += key + "=" +localStorage[key]+ ','
      }
    }
    return str
  }


})(window)