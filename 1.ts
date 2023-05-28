//ts基本数据类型,ts可以视为js的超集
let name1: string = 'zhangke'
enum color {
    red = 1,
    blue,
    green
}
const arr: number[] = [1, 2, 3]
const x: color = color.blue
const arr1 = ['zk', { a: 1, b: 2, c: [1, 2, 3] }]
const tumple: [number,string,number] = [1,'zk',23] //tumple类型可以认为是一种已知数据类型的特殊数组
const arr2:any[]=[1,2,'zk',{x:[1,2,3],y:x}]
let O:Object
O = 1

const { log } = console
log(x)
log(arr)
log(arr1)
log(tumple)
log(arr2)
log(O)