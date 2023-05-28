namespace A {
    export const add = <T extends number>(a: T , b: T ) => {
        return a + b
    }
}


interface Len {
    length:number
}
function getLength<T extends Len>(x:T):number{
    return x.length
}


const obj = {
    name:'zk',
    age:21,
    sex:'男',
    school:'XUPT'
}
const obj2 = {...obj}


type Key = keyof typeof obj
function fn<T extends object,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

interface Data{
    name:string,
    age:number,
    sex:string
}
type Options<T extends object> = {
    [Key in keyof T]:T[Key]
}
type B = Options<Data>

console.log(A.add(1, 2));
console.log(obj2);
console.log(getLength('ILOVE'));
console.log(fn(obj,'age'))

