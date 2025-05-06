{

    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSleep(numberOfHour: number) {
            console.log(`${this.name} is sleep for ${numberOfHour}`)
        }
    }


    class Student extends Parent{
        
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
       
    }

    const student1 = new Student("Ghosh", 25, "Faridpur");

    // ----------------
    class Teacher extends Parent{
        
        designation: string
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(numberOfHour: number) {
            console.log(`${this.name} is sleep for ${numberOfHour}`)
        }
        takeClass(numberOfClass: string) {
            console.log(`${this.name} take number of class ${numberOfClass}`)
        }
    }

    const teacher1 = new Teacher("Ghosh", 25, "Faridpur", "Math teacher");




}