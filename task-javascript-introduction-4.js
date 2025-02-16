arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

let gabungan = [...arr1, ...arr2];

console.log(gabungan);

const person = {
  name: "John",
  age: 30,
};

const personWithGender = { ...person, gender: "male" };

console.log(personWithGender);
