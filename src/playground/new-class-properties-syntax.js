
class OldSyntax {
  constructor() {
    this.name = 'Stephen'
  }
}

const oldsyntax = new OldSyntax();
console.log(oldsyntax);

/* -------------------------------------*/

class NewSyntax {
  name = 'Jenny';
  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  }
}

const newsyntax = new NewSyntax();
const newGetGreeting = newsyntax.getGreeting;

console.log(newGetGreeting());

/* This allows us to use properties normally in Classes. It also fixes the binding issues. Plus we dont need to use
* constructor*
*
* We do need to install package - "babel-plugin-transform-class-properties" . plus alter the .babelrc with the new
 * pligin*/
