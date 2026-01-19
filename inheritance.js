class User{
    constructor(name)
    {
        this.name=name;
    }
    login()
    {
        console.log(`${this.name} logged in`)
    }
}

class Admin extends User {
    delete()
    {
        console.log(`${this.name} is deleted`)
    }
}

const a=new Admin("Harvey");
a.login();
a.delete();
