{
    class Animal {
        name: string;
        bread: string;
        sound: string;
        constructor(name: string, bread: string, sound: string){
            this.name = name;
            this.bread = bread;
            this.sound = sound;
        }
        makeSound(){
            console.log()
        }
    }

    const cat = new Animal("cat","american","meow")
    console.log(cat);

}