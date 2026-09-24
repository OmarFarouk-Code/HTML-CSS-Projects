const people = ["omar", "farouk", "ahmed"];

const capitalizedNames = people.map(
  (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
);

console.log(capitalizedNames);
