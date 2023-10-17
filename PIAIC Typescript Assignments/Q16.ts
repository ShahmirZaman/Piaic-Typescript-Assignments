let friends:string[] = ["Khawar","Taha","Shanawar"];
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello, ${friends[i]}! You are invited to the dinner party.`);
}
console.log(`Guest No.2: ${friends[1]} can't make it to the dinner.I am inviting someone else`);
friends[1] = "Basit";
friends.map(function(names){
    console.log(`Hello ${names}! You are invited to the dinner party.`)
})
console.log(`Adding more guests, since we have ordered a larger dinner table`);
friends.unshift("Manij");
friends.splice(2,0,"Monis");
friends.push("Bilal");
friends.map(function(names){
    console.log(`Hello ${names}! You are invited to the dinner party.`)
})