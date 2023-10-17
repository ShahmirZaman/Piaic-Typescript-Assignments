let friends = ["Khawar", "Taha", "Shanawar"];
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello, ${friends[i]}! You are invited to the dinner party.`);
}
console.log(`Guest No.2: ${friends[1]} can't make it to the dinner.I am inviting someone else`);
friends[1] = "Basit";
friends.map(function (friend) {
    console.log(`Hello ${friend}! You are invited to the dinner party.`);
});
console.log(`Adding more guests, since we have ordered a larger dinner table`);
friends.unshift("Manij");
friends.splice(2, 0, "Monis");
friends.push("Bilal");
friends.map(function (friend) {
    console.log(`Hello ${friend}! You are invited to the dinner party.`);
});
console.log(`Oops! The table won't arrive on time. I can invite only two guests.`);
while (friends.length > 2) {
    let friend = friends.pop();
    console.log(`Sorry! You are not invited ${friend}`);
}
while (friends.length != 0) {
    let friend = friends.pop();
    console.log(`You are still invited ${friend}`);
}
console.log(`Printing list to check if it's empty or not: ${friends}`);
export {};
