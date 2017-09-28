class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return 'Hi!!';
    return `Hi, I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // refers to the parent / class we extend
    this.major = major;
  }

  getDescription() {
    let description = super.getDescription(); // accessing parent getDescription method, to change it just for this
    // class

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
    // return 'description in Student'
  }

  hasMajor() {
    return !!this.major;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);

    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }

    return greeting;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }


}

const me = new Person('Stephen', 45);
console.log(me.getDescription());

const me2 = new Student('Stephen', 45, 'MBA');
console.log(me2.hasMajor());
console.log(me2.getGreeting());
console.log(me2.getDescription()); // If in Student will call it first, if not will call the parents one - Protypal
// inheritence

const another = new Person();
console.log(another.getDescription());

const student = new Student('Vlies Visagie', '40', 'Rocket Mechanic');
console.log(student.getDescription());

const newStudent = new Traveller('Iqbal Diqbal Edams', 23, 'Knysna');
console.log(newStudent.getGreeting());

const newStudent2 = new Traveller('Iqbal Diqbal Edams', 23);
console.log(newStudent2.getGreeting());
