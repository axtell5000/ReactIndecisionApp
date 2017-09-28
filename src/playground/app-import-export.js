
// import './utils';
import subtract, { square, add } from "./utils"; // when importing default things, they must not be in the curly braces
import isSenior, { isAdult, canDrink} from "./person";

console.log('app.js is running!!');

console.log(square(100));

console.log(add(100, 50));

console.log(subtract(100, 50));


console.log(isAdult(25));

console.log(canDrink(12));

console.log(isSenior(25));
console.log(isSenior(75));
