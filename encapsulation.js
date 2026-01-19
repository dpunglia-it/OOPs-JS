class bank{
    #balance

    constructor(balance)
    {
      this.#balance=balance;
    }

    deposit(amount)
    {
        this.#balance += amount;
    }

    getBalance(){
         return this.#balance;
    }
}

const acc= new bank(10000);
acc.deposit(5000);
console.log(acc.getBalance());