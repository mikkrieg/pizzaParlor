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
  $('form').submit(function(e){
    e.preventDefault();
    const name = $('input#name').val();
    const size = $('select#sizes').val();
    const sauce = $('select#sauces').val();
    const cheese = $('select#cheeses').val();
    const meats = $('select#meats').val();
    const veggie = $('select#veggies').val();
    const extras =$('select#extras').val();
    let newPizza = new Pizza(sauce, cheese, meats, veggie, extras, size);
    
    if(name === ''){
      $('div#warning').text("Please enter your name");
    } else if(size === ''){
      $('div#warning').text("Please enter a size");
    } else if(sauce === ''){
      $('div#warning').text("Please enter a sauce");
    } else if(cheese === ''){
      $('div#warning').text("Please enter a cheese");
    } else if(meats === ''){
      $('div#warning').text("Please enter a meat");
    } else if(veggie === ''){
      $('div#warning').text("Please enter a veggie");
    } else if(extras === ''){
      $('div#warning').text("Please enter any extras");
    } else {
      $('div#warning').empty();
    }



  });


});