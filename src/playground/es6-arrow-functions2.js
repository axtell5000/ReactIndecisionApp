// 1) argumeny object - no longer auto bound witen using arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(10,20, 1000));

// const add = (a, b) => {
//   console.log(arguments); // when using arrow functions, arguments doesnt work like this
//   return a + b;
// };
//
// console.log(add(10,20));

// 2) this keyword - no longer auto bound when using arrow function

const user = {
  name: 'Stephen',
  cities: ['Cape Town', 'London', 'Paris'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

      // unlike foreach map transforms data and stores it in an array
      return this.cities.map( (city) => {
        return this.name + ' has been to ' + city;
      });
    // const that = this; // the good old hack

    // this.cities.forEach(function (city) {
    //   console.log(that.name + ' has been to ' + city);
    // })
    // this.cities.forEach( (city) => { // using fat arrow binds this correctly
    //   console.log(this.name + ' has been to ' + city);
    // })
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map( (number) => {
      return number * this.multiplyBy;
    });
  }

};

console.log(multiplier.multiply());
