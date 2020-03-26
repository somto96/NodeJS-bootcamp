// Remove Array duplicates using ES6 Set

const duplicates = [1,2,2,3,4,4,1];

const uniques = Array.from(new Set(duplicates));

console.log(uniques);