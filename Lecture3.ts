// Any Type 

// The any type is most flexible type in typescript. It essentially turns off all the type checking for the variable or expressions it is applied to .
// let maxNumber=(Number as any).MAX_SAFE_INTEGER
// it will not throw error in typescript.

// let fNum:any=5;
// fNum="Deepka";

// Why we use any beacuse above code will equal to javascript code:

// Working with dynamic data: when dealing with data from dynamic sources like user inputs, network responses or deserialized  JSON object then any tyoe can be very useful.

// Miigration from javascript: When migrating a javascript codebase to typescript, using any type any be convenient way to quickly annotate variables and functions without immediately describing their precise type.

// Unknown type 
// The unknown type is a safer alternative to any beacuse it still enforces type checking and type safety.
// Variables of type unknown can hold values of any type, but you must perform type check or type assertions before using them in specific ways .

// By default the return type for funcion is  void if it does not return anything but if we written something hen it is type string by default.

// Type Interference
// Type interference in typescript refers to the ability of the typescript compiler to automatically determine and assign type to variables, expression and functions and functions return values based on tgeir usage and context in the code .

// What are some best practices to use tyoe interference in typescript?

// use type inteference for simple cases where the assigned value clearly indicasted the intended type.
// when in doubt, provide explicit type annotations t make your intentions clear .
// Avoid relying too heavily in type interference where the assigned value is complex or ambiguous.
// Regularly review or refractor your code to ensure that infer type align with your intentions .

// In type scrip we can make a parameter optional by writing "?" just after parameter name .

// How to declare array in type script .
// const numbers:number[]=[1,2,3,4,5];
// const numbers1:number[]=new Array(1,2,3,4,5);
// const numbers2:string[]=Array.of("Deepka","Sangwan");