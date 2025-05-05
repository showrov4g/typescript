{

    class Animal {
        name: string;
        breed: string;
        constructor(name: string, breed: string){
            this.name = name;
            this.breed = breed;
        }
        makeSound(){
            console.log("this sound is making")
        }
    }

    class Dog extends Animal{
        constructor(name: string, breed: string){
            super(name, breed)
        }
        makeBark(){
            console.log("It is barking")
        }
    }
    class Cat extends Animal{
        constructor(name: string, breed: string){
            super(name, breed)
        }
        makeMeow(){
            console.log("It is barking")
        }
    }

    



}