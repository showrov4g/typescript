{
    class Animal {
        name: string;
        breed: string;
        sound: string;
        constructor(name: string, breed: string, sound: string){
            this.name = name;
            this.breed = breed;
            this.sound = sound;
        }
        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }

    const cat = new Animal("cat","american","meow")
    cat.makeSound()

}