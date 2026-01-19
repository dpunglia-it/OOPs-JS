class student {
    constructor(name,roll)
    {
        this.name=name;
        this.roll=roll ;
    }

    getDetails(){
    return `${this.name}-${this.roll}`;
    }  
}

const s1= new student("Darshit",111);
console.log(s1.getDetails());