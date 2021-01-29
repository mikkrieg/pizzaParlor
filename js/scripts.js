// Business Logic
function Pizza(sauce, cheese, meat, veggie, extra, size){
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
  this.extra = extra;
  this.size = size;
}

Pizza.prototype.price = function(){
  this.price = 0;
  if(this.size === 'Small'){
    this.price = '$5';
  } else if (this.size === 'Medium'){
    this.price = '$8';
  } else if (this.size === 'Large'){
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
    console.log(newPizza);
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
      $('form').hide();
      $('div#output').show();
    }

    newPizza.names();
    newPizza.price();

    $('span#user-name').text(newPizza.name);
    $('span#user-size').text(newPizza.size);
    $('span#user-sauce').text(newPizza.sauce);
    $('span#user-cheese').text(newPizza.cheese);
    $('span#user-meat').text(newPizza.meat);
    $('span#user-veggie').text(newPizza.veggie);
    $('span#user-extra').text(newPizza.extra);
    $('span#user-price').text(newPizza.price);
  });


});