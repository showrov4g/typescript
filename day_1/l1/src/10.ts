{
    //union
    type FrontendDeveloper = "newDeveloper" | "Experience Developer";
    const newDeveloper : FrontendDeveloper = "newDeveloper";

    type User = {
        name: string,
        email: string,
        gender: "male" | "Female",
        bloodGroup : "A+" | "b+" | "ab+"
    }

    const user1 : User = {
        name: 'Showrov Ghosh',
        email: "abc@gmail.com",
        gender: "male",
        bloodGroup: "A+"
    }
 }