function buildCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    for (const [propName, propValue] of options) {
        car[propName] = propValue;
    }
    return car;
}
const myCar = buildCar("Honda", "Civic", ["color", "blue"], ["year", 2022]);
console.log(myCar);
export {};
