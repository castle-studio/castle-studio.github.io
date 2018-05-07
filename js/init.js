var app = angular.module("CastleStudio", []);

app.controller('personController', function($scope) {
  $scope.persons = [
    {
        id : 1,
        full_name: 'Giancarlos Castillo',
        position: 'Web Developer',
        image:'img/gian/gc.jpg',
        description: "I'm a very outgoing person. Love calisthenics and talk about any kind of ideas. People says JavaScript is my mother language.",
        isClass: 'users'
    },
    {
      id: 2,
      full_name: 'Carlos Andres G.',
      position: 'Mobile Developer',
      image: 'img/carlos/ca.jpg',
      description: "I'm a very focused kind of person, love Android and iOS development. I find pleasure in a good glass of wine and thinking in near future. Classic rock is always welcome and german cars too.",
      
      isClass: 'users'
    }
    
  ]
});

$(function(){
    
    $('.button-collapse').sideNav(); 
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    animate('.logo', ' animated fadeIn', 5000);
    
  
  Materialize.scrollFire([
    {selector: 'klk', offset: 10, callback: 'Materialize.toast("klk", 1000);' }
  
  ]);
}); 

 function animate(selector, animation, time) {
    $(selector).addClass(animation);
    
    var wait = window.setTimeout( function(){
      $(selector).removeClass(animation);
    }, time);
  }