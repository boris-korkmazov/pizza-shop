(function(_this){
  _this.somthing =  function(){
    localStorage.clear()
  }

  _this.addToCart = function(id){
    var key = 'product_' + id
    var x = localStorage.getItem(key);
    x = x*1 + 1;
    localStorage.setItem(key, x);

    alert("Items in your cart: " + cartGetNumberOfItems())
  }

  cartGetNumberOfItems = function(){
    var sum = 0
    for(var key in localStorage){
      if(key.indexOf('product_')==0){
        sum += parseInt(localStorage[key])
      }
    }
    return sum
  }
})(window)