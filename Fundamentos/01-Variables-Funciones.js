console.log("El área de un triangulo de base 5 y altura 7 es:" + 5*7/2)
console.log(`El área de un triangulo de base 5 y altura 7 es: ${+ 5*7/2}`)
let base = 5
let altura = 7
console.log(`El área de un triangulo de base ${base} y altura ${altura} es: ${base * altura / 2}`)

base = 10
altura = 20

function triagleArea(base,altura)
{
	return base * altura / 2
}

console.log(`El área de un triangulo de base ${base} y altura ${altura} es: ${triagleArea(5,7)}`)

//Arrow Function 

base = 33
altura = 45
// podemos hacer una variable constante con la palabra const
const triagleArea = (base,altura) => base * altura / 2

console.log(`El área de un triangulo de base ${base} y altura ${altura} es: ${triagleArea(base,altura)}`)

let radio = 5
const circleArea = (radio) => Math.PI * Math.pow(radio,2)
console.log(`El área de un curculo con un radio de ${radio} es ${circleArea(radio)}`)
