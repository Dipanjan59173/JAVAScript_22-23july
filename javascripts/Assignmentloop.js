'use strict';
let jeffHt = 2
let jeMass = 30
let toddHt = 2
let todMass = 50

function calBmi(h,m){
   let bmi = (m/(h*h))
   return bmi

}

let x = calBmi(jeffHt,jeMass)
let y = calBmi(toddHt,todMass)
console.log(x)
console.log(y)

if(x>y){
    let BmiHigh = true
    console.log(`is Jeffs BMI higher than Todds ${BmiHigh}`)

}else{
    let BmiHigh = false
    console.log(`Jeffs BMI higher than Todds ${BmiHigh}`)
};

let boolen
var bool

jeffBMI > toddBMI ? bool= true : bool = false

console.log('is Jeff’s BMI higher than Todd’s true? ' +bool)


console.log('---------------Assignment 2 ------------------')

function average(p1,p2,p3){
   let avg=(p1+p2+p3)/3
    return avg
}
let Heath = average(89,120,103)
let Zane = average(116,94,123)
let Maraih=average(97,134,105)

console.log(`Average Score of Heath is ${Heath}`)
console.log(`Average score of zane is ${Zane}`)
console.log(`Average score of Maraih is ${Maraih} `)

console.log('------compare between Heath and Zane teams-----  ')

if(Heath==Zane){
    console.log(`There is Tie. Average Score is ${Heath}`)
 elseif(Heath>Zane)
 {
    console.log(`Heath won the match . Average Score is ${Heath}`)
 }
    
}else{
    console.log(`Zane won the match . Average score is ${Zane}`)
}

console.log('-----compare between Heath , Zane and Maraih  teams ----')

if(Heath>Zane && Heath > Maraih){
    console.log(`Heath won the match ${Heath}`)
}
else if(Zane > Maraih) 
{
    console.log(`Zane won the match ${Zane}`)
}else
{
    console.log(`Marai won the match ${Maraih}`)
}