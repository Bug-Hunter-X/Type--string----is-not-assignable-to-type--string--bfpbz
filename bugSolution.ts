function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access individual elements
console.log(greeter(user[0]));
console.log(greeter(user[1]));

//Solution 2:  Modify function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));