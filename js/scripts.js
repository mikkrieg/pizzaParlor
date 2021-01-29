// Business Logic
function Pizza(sauce, cheese, meat, veggie, extra, size){
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatTopping = meat;
  this.vegtopping = veggie;
  this.extraTopping = extra;
  this.size = size;
}

Pizza.prototype.price = function(){
  this.price = 0;
  if(this.size === 'small'){
    this.price = '$5';
  } else if (this.size === 'medium'){
    this.price = '$8';
  } else if (this.size === 'large'){
    this.price = '$12';
  } else {
    this.price = 0;
  }
}

Pizza.prototype.names = function(){
  this.name = $('input#name').val();
}






// UI Logic
$(document).ready(function(){

});