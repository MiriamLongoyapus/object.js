//Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 
//years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function getNamesOfAdultS(peopleArray) {
const adultsArray = peopleArray.filter(person => person.age >= 18); 
  const namesArray = adultsArray.map(person => person.name);
  return namesArray;
}


//Write a function that takes an array of objects, where each object represents a product with
// a name, price, and category property. The function should return an object that groups the 
//products by their categories, with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function groupProducts(products) {
  const result = {};
  products.forEach((product) => {
    const category = product.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(product);
  });
  return result;
}
console.log(result)


//Given an array of objects, where each object represents a student with a name and an array of scores, 
//write a function that returns a new array containing the names of all students whose average score is
// greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function getTopStudents(projects) {
  const topStudents = [];
  for (let project of projects) {
    const name = project.name;
    const scores = project.scores;
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
    if (averageScore >= 85) {
      topStudents.push(name);
    }
  }
  return topStudents;
}
 const student_Performance = [
  { name: 'John',
   scores: [90, 80, 85] },
  { name: 'Jane',
   scores: [95, 92, 88] },
  { name: 'Jim', 
  scores: [70, 80, 75] },
  { name: 'Jill', 
  scores: [85, 90, 84] },
];
const topStudents = getTopStudents(student_Performance);
console.log(topStudents); // Output: ["John", "Sarah", "Mary"

//Given an object representing a car, with properties for the make, model, year, and a method to
// display the car's information, write a function that takes the car object and adds a new method
// to the object called age. The age method should return the current age of the car based on the 
//current year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function addAgeMethod(car) {
  var currentYear = new Date().getFullYear();
  car.age = function() {
    return currentYear - this.year;
  }
}
var myCar = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log("Make: " + this.make);
    console.log("Model: " + this.model);
    console.log("Year: " + this.year);
   
  }

};
console.log(myCar.age());

addAgeMethod(myCar);



