function describe_city(city:string,country="Pakistan"):string {
    if(country) {
        return `${city} is in ${country}`
    }
    else{
        return `${city} is in ${country}`
    }
}
console.log(describe_city("NewYork","USA"));
console.log(describe_city("Karachi"));
console.log(describe_city("Antalya","Turkey"));
