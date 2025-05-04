{
    //constraints
    const course = <T extends { id: number, name: string, email: string }>(student: T) => {
        const studentCourse = "next label Web development course"
        return {
            ...student,
            studentCourse
        }
    }

    const student1 = course({
        name: "sk",
        email: "abc@gmial.com",
        roll: 12,
        devType: "new developer"
    })

}