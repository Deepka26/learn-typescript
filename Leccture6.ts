GENERICS

Generics in typescript allows you to create reusable components or functions that can work with multiple data types .

function logReturn(value:number|string):number|string{
return value;
}

function logReturn2<T>(value:T):T{
    return value;
}
//when write with the help of generics and "T" is a placeholder. we can write anything in place of T.

logReturn2<number>(42)

function logReturn3<T,U>(a:T,b:U):void{}
logReturn3<Number,string>(2,"hello")
