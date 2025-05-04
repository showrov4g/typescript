{
    const createArray = (param: string): string[] => {
        return [param];
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const createArrayWithTuple = <T,Q>(param1: T, param2: Q) : [T,Q] =>{
        return [param1 , param2];
    }



    const result1 = createArray("bangladesh")
    type User = {
        id: number,
        name: string,
        class: number
    }
    const resGen = createArrayWithGeneric<User>({
        id: 123,
        name:"Ghosh",
        class: 6,

    })

}