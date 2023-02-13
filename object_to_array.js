const myObj = {
  username: "johnnyA308",
  firstname: "Johnny",
  lastname: "Willy",
  age: 37,
  address: {
    city: "Vantaa",
    country: "Finland",
    street: "Rantatie 7B",
  },
};
// run only keys
const propertyNames = Object.keys(myObj);
console.log(propertyNames);

// run only values 
const propertyValues = Object.values(myObj);
console.log(propertyValues);



