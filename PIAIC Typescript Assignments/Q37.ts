function make_shirts(size:string,msg ="I Love Typescript") : string {
    if(msg && size.toLowerCase() === "medium" || "large") {
        return `The size of T-shirt is ${size} and the message is ${msg}`
    }
    else {
        return `The size of T-shirt is ${size} and the message is ${msg}`
    }
}
console.log(make_shirts("Medium"));
console.log(make_shirts("Large"));
console.log(make_shirts("XL","Happy Coding!"));
console.log(make_shirts("Small","Typescript is Amazing!"));