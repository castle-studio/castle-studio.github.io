
$(function(){
        
    
    $('.button-collapse').sideNav(); 
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    //animate('.logo', ' animated fadeIn', 5000);
 
  var options = [
    
     {selector: '#main-logo', offset: 30, callback: 'Materialize.toast("Hi, and welcome! :D", 3000);' },
     {selector: '#contact', offset: 90, callback:"Materialize.toast('We are ugly and we know it. Lets back to bussiness :P', 3000);"}

  ]
  
  Materialize.scrollFire(options);
}); 