class Transaction{
    pay(amount){
        this.validate();
        this.processing(amount);
        this.successfull();
    }

    validate()
    {
        console.log("Validating Payment...");
    }

    processing(amount){
        console.log(`Processing payment of ${amount}`);
    }

    successfull(){
        console.log("Payment Successfull");
    }
}

const a=new Transaction();
a.pay(500);