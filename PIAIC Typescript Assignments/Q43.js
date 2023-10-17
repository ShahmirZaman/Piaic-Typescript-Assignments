let magician = ["magician1", "magician2", "magician3", "magician4"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `The Great ${magician[i]}`;
    }
}
let copyArray = [...magician];
make_great(copyArray);
console.log("Copy Array: ");
show_magicians(copyArray);
console.log("Original Array");
show_magicians(magician);
export {};
