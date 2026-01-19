class A{
    constructor(){
    console.log("Parent Constructor")
    }
}
class B extends A{
    constructor(){
        super();
        console.log("Child Constructor");
    }
}

const obj=new B();