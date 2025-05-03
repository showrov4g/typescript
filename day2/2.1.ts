{
    //type assertion

    let anything : any ;
    anything = "next label web developer";
    anything = 333 ;
//    (anything as number);
    const kgToGram = (value: number | string) =>{
        if (typeof value === "string"){
            const convertedValue = parseFloat(value)
            return convertedValue;
        }
        if(typeof value === "number"){
            
        }
    }


}