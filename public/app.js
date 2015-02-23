var somthing =  function(){

    var x = window.localStorage.getItem('ccc')
    
    x = x*1 + 1

    
    window.localStorage.setItem('ccc', x)

    alert(x)  

}


var addToCart = function(){
  alert("Added to cart")
}