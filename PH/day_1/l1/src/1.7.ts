{
    let friend1: string[] = ["sk","dk","tk"];
    let friend2: string[] = ["Dipu","Toup","Apu"];

    friend1.push(...friend2);


    let group1 = {
        one: 'showrov',
        two : 'dipu',
        three: "me"
    }
    let group2 = {
        four : "Apu",
        five : "sk"
    } 

    let totalList = {
        ...group1,
         ...group2
    }
    const greeting = (...friends : string[]) =>{
        // console.log(`welcome ${friends1},${friends2},${friends3}`)
        friends.forEach((friend :string)=>console.log(`Hi welcome ${friend}`))
    } 



}