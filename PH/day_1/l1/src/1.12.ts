{
    const searchName = (value: string | null) =>{
        if(value){
            console.log("searching data")
        }else{
            console.log("nothing to search");
        }
    }
    searchName(null)
}