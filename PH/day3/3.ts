{
    // type gard

        type AlphaNumeric = string | number;



    const add = (
        param1: AlphaNumeric,
        param2: AlphaNumeric,
    ): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }else{
        return param1.toString() + param2.toString();
        }
    };

    const result1 = add("ghosh", 123);
    console.log(result1)

    // in gard

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string,
        role: "admin"
    }
    const getUser = (user: NormalUser | AdminUser) =>{
        if("role" in user){
            user.role
        }else{
            
        }
    }


}
