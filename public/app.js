var somthing =  function(){
    var x = window.localStorage.getItem('aaa')
    if(! x){
      window.localStorage.setItem('aaa', 555)
    }

    alert(window.localStorage.getItem('aaa'))  

}