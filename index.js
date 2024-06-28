const obj={
    Pavilion:1000,
    Honda:16000,
    Phone:200,
    Laptop:2000
}
console.log("Products above 500$:");
Object.keys(obj).forEach(element=>{
    if(obj[element]>500){
        console.log(`${element}: ${obj[element]}$`);
    }
})
let sum=0
let counter=0
Object.values(obj).forEach(price=>{
    counter++
    sum+=price
})
console.log(`Average price of the products: ${sum/counter}$`);
