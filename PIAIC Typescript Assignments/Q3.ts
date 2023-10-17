let personName: string = "Shahmir";

let lowerCaseName: string = personName.toLowerCase();
let upperCaseName: string = personName.toUpperCase();
let titleCaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

console.log("Lowercase: " + lowerCaseName);
console.log("Uppercase: " + upperCaseName);
console.log("Titlecase: " + titleCaseName);
