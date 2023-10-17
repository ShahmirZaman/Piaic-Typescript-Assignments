function describe_city(city, country = "Pakistan") {
    if (country) {
        return `${city} is in ${country}`;
    }
    else {
        return `${city} is in ${country}`;
    }
}
console.log(describe_city("NewYork", "USA"));
console.log(describe_city("Karachi"));
console.log(describe_city("Antalya", "Turkey"));
export {};
