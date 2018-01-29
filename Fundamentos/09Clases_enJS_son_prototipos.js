function Punto(x,y){
	this.x = x
	this.y = y
}
Punto.prototype.moverenX = function moverEnX(x)
{
	this.x += x
} 

Punto.prototype.moverenY = function moverEnY(y)
{
	this.y += y
} 

Punto.prototype.distancia = function distancia (p){
	const x = this.x - p.x
	const y = this.y - p.y
	return Math.sqrt(x * x + y * y)
}

const p1 = new Punto(0,4)
const p2 = new Punto(3,0)


console.log(p1.distancia(p2).toFixed(2))
p1.moverenX(10)
console.log(p1.distancia(p2).toFixed(2))
p2.moverenY(-4)
console.log(p1.distancia(p2).toFixed(2))
