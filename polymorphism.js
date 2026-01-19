class Shape{

    area(value)
    {
        return 0;
    }
}
class Square extends Shape{
    area(side)
    {
        return side*side;
    }
}
class circle extends Shape{
    area(radius)
    {
        return 3.14*radius*radius;
    }
}

const a=new Square();
let b=a.area(4);
console.log(b);

const c=new circle();
let d=c.area(2);
console.log(d);