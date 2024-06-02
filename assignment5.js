/*

/* 1. Promises
Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age.


function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [{
          id: 1, name: 'Yashin', age: 64
        },
          {
            id: 2, name: 'Maldini', age: 10
          },
          {
            id: 3, name: 'Lev', age: 23
          },
          {
            id: 4, name: 'Gerad', age: 67
          },
          {
            id: 5, name: 'Devid', age: 34
          },
        ];
        resolve(users);
      }, 2000);
    });
  }
  
  fetchData().then(users => {
    console.log(users);
  });


/* 2. Closures
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable.


class Counter {
    constructor () {
        this.count = 0;
    }
    increment () {
        this.count += 1;
    }
    getCount() {
        return this.count;
    }
}

function createCounter (){
    return new Counter();
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

counter.increment();
console.log(counter.getCount());

// ------------------------------------------------------------------------

function createCounter() {
    let count = 0;

    function increment() {
        count += 1;
    }

    function getCount() {
        return count;
    }

    return {
        increment, getCount
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); 

counter.increment();
console.log(counter.getCount()); 


/* 3. Callbacks
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers.


function prcoessData(array, callback) {
    let newNumber = [];
    for (let i = 0; i < array.length; i++) {
        newNumber[i] = callback(array[i]);
    }
    return newNumber;
}

function add(number) {
    return number + 2;
}

const array = [1, 2, 3, 4, 5];

console.log(prcoessData(array, add));


/* 5. Array Manipulation: Map
Given an array of numbers, create a function that doubles each number using map.


function doubles(array) {
    return array.map(number => number * 2);
}

const array = [1, 2, 3, 4, 5];
console.log(doubles(array));


/* 6. Array Manipulation: Filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter.


function filters(array) {
    return array.filter(number => number >= 10);
}

const array = [1, 13, 17, 4, 20];
console.log(filters(array));


/* 7. Array Manipulation: Find
Given an array of numbers, create a function that finds the first number greater than 15 using
find.


function greaterNumber(array) {
    return array.find(number => number > 15);
}

const array = [17, 13, 5, 20, 10];
console.log(greaterNumber(array)); 


/* 8. Array Manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce.


function sum(array) {
    return array.reduce((number, arrays) => number + arrays);
}

const array = [2, 4, 6, 8, 10];
console.log(sum(array));


/* 9. Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects.


function transform(persons) {
    const {userId, firstName} = persons;

    return userId.reduce((object, id, index) => {
        object[id] = { id: id, nam : firstName[index]};
        return object;
    }, {});
}

const persons = {
    userId : [1, 3, 5, 8],
    firstName : ['Sandip', 'Aditya', 'Subarna', 'Aditya'],
}

console.log(transform(persons));


/* 10. Classes and Objects
Create a Person class with a constructor that accepts name and age parameters. Add a
method describe that returns a string describing the person.


class Person {
    constructor (fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    message() {
        return `My name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

function personInfo() {
    return Person;
}

const info = new Person("Sandip Thapa Magar", 20);
console.log(info.message());


/* 11. Inheritance
Create a Student class that extends Person and adds a grade property. Add a method study
that returns a string indicating the student is studying.


class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;   
    }
    describe() {
      return `Name: ${this.name}, Age: ${this.age}`; 
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); 
      this.grade = grade; 
    }
    study() {
      return `${this.name} is studying.`; 
    }
  }
  
  const student1 = new Student('Elena', 21); 
  console.log(student1.describe());               
  console.log(student1.study());                  
  
  const student2 = new Student('Alex', 32);   
  console.log(student2.describe());               
  console.log(student2.study());   
  
  
/* 12. Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
fetch data&quot;. Handle this error using .catch when calling the function.


function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = Math.random() > 0.5; 
  
        if (success) {
          resolve("Data fetched successfully!"); 
        } else {
          reject("Failed to fetch data."); 
        }
      }, 2000); 
    });
  }
  
  fetchData()
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  


/* 13. Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks.


async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Yashin', age: 64 },
          { id: 2, name: 'Maldini', age: 10 },
          { id: 3, name: 'Lev', age: 23 },
          { id: 4, name: 'Gerad', age: 67 },
          { id: 5, name: 'Devid', age: 34 },
        ];
        resolve(users);
      }, 2000);
    });
  }
  
  async function fetchDataAsync() {
    try {
      const users = await fetchData();
      console.log(users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchDataAsync();
  

/* 14. Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce.


function uniqueHobbies(persons) {
    const allHobbies = persons.reduce((acc, person) => acc.concat(person.hobbies), []);
    const uniqueHobbiesSet = new Set(allHobbies);
    return [...uniqueHobbiesSet];
}

const persons = [
    {
        name: "Sandip",
        hobbies: ["Reading", "Writing"]
    },
    {
        name: "Aditya",
        hobbies: ["Playing", "Coding"]
    },
    {
        name: "Subarna",
        hobbies: ["Writing", "Drawing"]
    }
];

console.log(uniqueHobbies(persons));


*/

