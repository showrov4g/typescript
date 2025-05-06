{

    class Counter {
        static count: number = 0;
        increment(){
            return(Counter.count = Counter.count +1)
        }
        discernment(){
            return (Counter.count = Counter.count -1);
        }
    }

    const instance = new Counter()
    console.log(instance.increment())
    const instance2 = new Counter()
    console.log(instance2.discernment())


}