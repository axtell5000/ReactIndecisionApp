var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jeni';
// cant do this - let nameLet = 'Chris'
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// cant do - const nameConst = 'Franklin';
// or cant do - nameConst = 'Franklin';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

// BINDING ISSUES

const obj = {
  name: 'Bam--Bam',
  getName() {
    return this.name;
  }
};

// const getname = obj.getName - we lose our binding when we do something like this, the this no longer points to obj
// when the context changes to fix we use bind

const getname = obj.getName.bind(obj);


console.log(getname());
