{
    //type assertion

    let anything: any;
    anything = "next label web developer";
    anything = 333;
    //    (anything as number);
    const kgToGram = (value: number | string): string | number |undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000
            return `the converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value
        }
    }

    const result1 = kgToGram(1000) as number; 
    console.log(result1)
    


}