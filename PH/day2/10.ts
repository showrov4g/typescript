{
    const arrayOfNumber :number[] = [1,3,4,5,7,8]
    // const arrayOfString : string[] = ["ghohs", "sk", "showrov"]
    const arrayOfString : string [] = arrayOfNumber.map((number)=>number.toString())
    console.log(arrayOfString);
}