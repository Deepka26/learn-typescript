INTERFACE 
In typescript, an interface is a powerful feature that allows you to define a contract for an object' shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any javascript during runtime.


interface Greet{
    name:string;
    age:number;

}
const greet:Greet={
    name:"Ram",
    age:21
}