type MyPick<T,K extends keyof T>={
    [key in K]:T[key]
}
type User={
    id:number;
    name:string;
    age:number;
}
type Test=MyPick<User,"age"|"id">

const user:Test={id:1,age:1}
console.log(user);

type MyOmit<T,K>={
    [P in keyof T as P extends K?never:P]:T[P]
}
type X=MyOmit<User,'id'|"age">