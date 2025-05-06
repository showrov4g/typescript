{
    type User = {
        name: string,
        age: number;
    }
    const user1: User = {
        name : "showrov ghosh",
        age: 25,
    }

    interface User2 {
        name : string ;
        age: number,
        email?: string
    }
    const user2 : User2 = {
        name: "showrov",
        age: 25,
        email: "abc@gmail.com"
    }

    type Roll = number [];

    interface Roll2{
        [index : number] : number;
    }

    const rollNumber1 : Roll2 = [1,3,4,5,67,7];

    type Add = (num1: number, num2 : number)=> number ;
    interface Add2 {
        (num1 : number , num2 : number) : number
    }

    const add : Add2  = (num1, num2) => num1 + num2;


}