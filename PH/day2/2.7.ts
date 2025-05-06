{
    //generic constrains with keyof  operator;

    type vehicles = {
        bike: string,
        car: string,
        ship: string,
    }

    type Owner = "bike" | "car" | "ship";
    type Owner2 = keyof vehicles;

    const person1 : Owner2 = "bike"


    //functions 

    const getPropertyValue =<X, Y extends "name" | "age"| "address">(obj:X, key: Y)=>{
        return obj[key]
    }

    const user = {
        name: "ghosh",
        age:35,
        address: "Jheniadh"
    }

    const result1 = getPropertyValue(user,"age")

    //
}