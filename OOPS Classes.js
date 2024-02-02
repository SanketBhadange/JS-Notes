
// Parent class (Superclass)class Person
    class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Prototype Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static Method
    static compareAges(person1, person2) {
      if (person1.age > person2.age) {
        return `${person1.name} is older than ${person2.name}.`;
      } else if (person1.age < person2.age) {
        return `${person2.name} is older than ${person1.name}.`;
      } else {
        return `${person1.name} and ${person2.name} are the same age.`;
      }
    }
}
  

  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.


//INHERITANCE in JS

// Parent class (Superclass)
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Child class (Subclass)
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call the parent class constructor
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying hard for their exams.`);
    }
  }
  
  // Creating instances of the subclasses
  const person = new Person("Alice", 30);
  const student = new Student("Bob", 18, "12th");
  
  // Using inherited methods and subclass-specific methods
  person.greet();    // Output: Hello, my name is Alice and I am 30 years old.
  student.greet();   // Output: Hello, my name is Bob and I am 18 years old.
  student.study();   // Output: Bob is studying hard for their exams.

console.log(Person.compareAges(person1, person2)); // Output: Alice is older than Bob.