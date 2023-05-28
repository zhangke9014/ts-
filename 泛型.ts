function add<T>(a: T, b: T): Array<T> {
    return [a, b]
}

console.log(add(1, 2));


const sum = <T>(x:T,y:T):Array<T>=>{
    return [x,y]
}

console.log(sum('a','b'));
