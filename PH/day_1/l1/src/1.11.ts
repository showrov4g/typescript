{
    // ternary operator / optional chaining / nullish coalescing operator
    let age: number = 16;

    if (age >= 18) {
        console.log("Adult")
    } else {
        console.log("minor")
    }

    const isAdult = age >= 18 ? "adult" : "junior";
    console.log({isAdult})

}