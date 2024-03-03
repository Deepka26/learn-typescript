ENUM DATATYPE

Enums in type script are commonly used when you want to represent a set of related values and choose one value from multiple options .Enums provide a convenient way to define set of named var,ues and associate them with specific meanings.

In type script ,when enum contants are not explicitly assigned numeric values , they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0 and subsequent enum constants receive values incremented by 1 .

enum Roles{
    user="user",
    admin="admin"
}
type LoginDetails={
    name?:string;
    email:string;
    password:string;
    role:Roles
}

const user1: LoginDetails={
    
    email:"ram123@gmail.com",
    password:"qwerty",
    role:Roles.admin
}

TUPLES 

In javascript, tuples are data structure that allows you to store a fixed-size collection of element of different types .They are similar to arrays but with a key difference: the types of element in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type and their size can vary .

type PersonInfo=[string,number,boolean]
type PersonInfo=readonly [string,number,boolean] //to make the tuple readonly
const oerson1: PersonInfo=["Ram",21,true]

Union type allow you to specify that a variable can hold values of multiple types .You use the (|) pipe symbol to define union.
In typescript, when using the union, it is essential to ensure that at least one of the types in union includes all the required properties. Failure to do so will result in type error during compilation.
const inputValue=(value:number|string |boolean)=>{}

type Person={
    name:string;
    number:number
}


type Employee={
    emp_id:number;
    email:string
}

type personDetails=Person & Employee;