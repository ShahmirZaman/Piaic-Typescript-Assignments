interface Car {
    manufacturer:string,
    model:string,
    [key:string]:any
}
function buildCar(manufacturer:string,model:string,...options:[string,any][]):Car {
    const car:Car = {
        manufacturer,
        model
    }
    for (const [propName, propValue] of options) {
        car[propName] = propValue;
      }    
    return car
}
const myCar = buildCar("Honda","Civic",["color","blue"],["year",2022])
console.log(myCar);