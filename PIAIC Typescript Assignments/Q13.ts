let favMode:string = "car";
let examples:string[] = [
    "My favourite mode of transportation is a ",
    "I have a suzuki cultus ",
    "I drive my ",
    "In future i will buy a new honda civic "
];
examples.map(function(arrayValues){
    console.log(`${arrayValues}${favMode}`);
})