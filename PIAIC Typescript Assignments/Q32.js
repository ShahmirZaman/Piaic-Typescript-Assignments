let current_users = ["Eric", "Bob", "Mike", "Susan", "David", "Bilal", "Tom", "James"];
let new_users = ["Ahmed", "Ali", "Bob", "Bilal", "Jack", "John", "Tim", "Annie"];
let lowerCase_current_users = current_users.map((item) => {
    return item.toLowerCase();
});
new_users.map((users) => {
    if (lowerCase_current_users.indexOf(users.toLowerCase()) === -1) {
        console.log("Username is valid");
    }
    else {
        console.log("You have to choose another username");
    }
});
export {};
