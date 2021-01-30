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
  this.price = '0';
  if(this.size === 'Small'){
    this.price = '$5.00';
    if(this.extra === "Olive oil"){
      this.price = '$5.50';
    } else if(this.extra === 'Oregano'){
      this.price = '$5.25';
    } else if(this.extra === 'Chili powder'){
      this.price = '$6.00';
    }
  } else if (this.size === 'Medium'){
    this.price = '$8.00';
    if(this.extra === "Olive oil"){
      this.price = '$8.50';
    } else if(this.extra === 'Oregano'){
      this.price = '$8.25';
    } else if(this.extra === 'Chili powder'){
      this.price = '$9.00';
    }
  } else if (this.size === 'Large'){
    this.price = '$12.00';
    if(this.extra === "Olive oil"){
      this.price = '$12.50';
    } else if(this.extra === 'Oregano'){
      this.price = '$12.25';
    } else if(this.extra === 'Chili powder'){
      this.price = '$13.00';
    }
  } else {
    this.price = 0;
  }
}

Pizza.prototype.names = function(){
  this.name = $('input#name').val();
}

Pizza.prototype.displayReciept = function(){
    $('span#user-name').text(this.name);
    $('span#user-size').text(this.size);
    $('span#user-sauce').text(this.sauce);
    $('span#user-cheese').text(this.cheese);
    $('span#user-meat').text(this.meat);
    $('span#user-veggie').text(this.veggie);
    $('span#user-extra').text(this.extra);
    $('span#user-price').text(this.price);
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
      $('h2.hidden').show();
      $('h1').hide();
      $('div#decoration').show();
    }
    newPizza.names();
    newPizza.price();
    newPizza.displayReciept();
    $('button#reload-button').on('click', function(){
      console.log("This is clicked")
      location.reload();
    })
  });
});