A class is a bluepint for creating objects.
In typescript, there is convention to use pascalcase(also known as UpperCamelCase) for class names. This means that class names should start with a capital letter and each subsequent word in the class should also begin with a capital letter .

class Persons {
    name:string="Ram";
    age:number=12;
    hobbies:string[]=["hello","world"]
}

const person1:Persons=new Persons()
class Persons {
    name:string;
    age:number;
    hobbies:string[]

    constructor(name:string,age:number,hobbies:string[])
    {
        this.name=name;
        this.age=age;
        this.hobbies=hobbies
    }
    introduce():string{
        return `name is ${this.name}`
    }
}
const person2: Persons=new Persons("Ram",12,["hello","world"])

Inheritance allows a class to reuse the functionality of an exiting class without rewriting it.
Inheritance is a mechanism in which one class acquire the property of another class.

class Students extends Persons{
    grade:number;
    constructor(name:string,age:number,hobbies:string[],grade:number)
    {
        super(name:name,age:age,hobbies:hobbies)
     this.name=name;
        this.grade=grade;
    }
}
const student1:Students=new Students

In typescript, the super keyword is used in the context of class inheritance. It allows a subclass(also known as derived class) to call methoods or access properties of its superclass(also known as base class). This is particularly useful when ypu want to extend the behaviour of a parent class while still leveraging its existing functionality.

The this keyword in a instructor inside the class refers to the instance of the object being created. It is used to access and assign values tothe instance properties.