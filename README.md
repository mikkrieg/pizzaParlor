# _Pizza Parlor_

#### _A program that lets a user create a pizza and see how much it costs_

#### By _**Michael Kriegel**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

### Libaries Used

* _Bootstrap_
* _jQuery_

## Description

_This is a program that will provide a user with multiple toppings and sizes to create a pizza. Once a user creates the pizza and submits it, the program will create a pizza object using a constructor. It will then display the properties of this object onto the page for the user to see. The user will be able to see what toppings they selected and the price of their pizza based on the toppings and pizza size that they select._

## Specs

### Test 1:
**Describe:** Pizza() 
<br/>
**Test:** A constructor that will create a pizza object
<br/>
**Expect:** Pizza(sauce, cheese, top1, top2, top3, size).toEqual(pizza {sauce:, cheese:, top1:, top2:, top3:, size:})

### Test 2:
**Describe:** Pizza.prototype.price()
<br/>
**Test:** A prototype that will determine the price of a pizza depending on inputted values and add a property to the object
<br/>
**Expect:** pizza.prototype.price().toEqual(pizza {price: })

### Test 3:
**Describe:** Pizza.prototype.names()
<br/>
**Test:** A prototype that will gather the name of a user and add it as a property
<br/>
**Expect:** Pizza.prototype.names().toEqual(pizza {name: })

### Test 4:
**Describe:** Pizza.prototype.displayReciept()
<br/>
**Test:** A prototype that will display the objects properties to the user
<br/>
**Expect:** Pizza.prototype.displayReciept().toEqual(display(name, size, sauce, cheese, meats, veggies, extras))

## Setup/Installation Requirements

### Local Machine
* _Clone this repository to your machine_
* _Navigate to the top level directory_
* _Open index.html in your browser_

### Web Version
* [Github Pages](https://mikkrieg.github.io/pizzaParlor/)

## Known Bugs

* _No Known Bugs_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright(c) 2021 Michael Kriegel

## Contact Information

Michael Kriegel: mikkrieg@gmail.com
