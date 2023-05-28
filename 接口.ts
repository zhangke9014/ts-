interface Book {
    price:number,
    name:string,
    type:string,
    [other:string]:any //这一行的意思是其他属性可有可无，但name，price，type必须要有，否则会报错
}
interface Book {
    sales:number
}

//当接口的名字发生重合时，校验规则会发生合并,也就是sales属性也是必须的
const a:Book = {
    price:120,
    name:'海底两万里',
    type:'science',
    sales:100,
}