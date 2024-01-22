HOW TO DECLARE OBJECT IN TYPESCRIPT?

const person: {
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        country:string
    }
}={
    name:"Ram",
    age:21;
    isStudent:true,
    addresss:{
        city:"Delhi",
        country: "India"
    }
}

TYPE ALIAS IN TYPESCRIPT:

In typescript, type alias is a way to give a name to a specific type or combination of types .It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code . Type aliases provide better readability,  organization and abstraction of complex types .

To define a type alias, ypu use the type keyword followed by the alias name and type definition .
 type Person={
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        country:string
    }
 }
 here first letter of wprd after type should be always capital(here that is person)
 const person2: Person={
    name:"Ram",
    age:21;
    isStudent:true,
    addresss:{
        city:"Delhi",
        country: "India"
    }

 }

 //CALL SIGNATURE
 The function call signature refers to the declaration or definition of a function,  which includes the function's name, parameters and return type .It defines the structure and type information of a function without including the functions implementation or body.

 Call signatures are typically used inside object type annotations to describe the shape of functions within object types .
 type Student={
    name:string;
    age:number;
    isStudent:boolean;
    greet:(country:string)=>string //call signature
    (country:string):string  //pure call signature
 }

 const student5:Student={
    name:string,
    age:number,
    isStudent:boolean,
    greet:(country):string=>`I am from ${country}.`
 }
 console.log(student5.greet("India"))
 console.log(student5("India")) //in case of pure call signature