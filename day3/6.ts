{
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }
        // getBalance(){
        //     return this._balance;
        // }
        get Balance(){
            return this._balance
        }
    }
    //child account 

    class studentAccount extends BankAccount{
        test(){
            this
        }
    }



    const goribManush = new BankAccount(111, "ghoish", 20)
//     goribManush.addDeposit(30)
   const myBalance = goribManush.Balance
   console.log(myBalance);
  

}