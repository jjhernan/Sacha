/*function Punto(x,y){
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
}*/

const Punto = {
	init: function (x,y){
		this.x = x
		this.y = y
	},
	moverenX: function moverenX(x){
		this.x += x
	},
	moverneY: function moverneY(y){
		this.y += y
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.sqrt(x * x + y * y)
	}
}

/*const p1 = new Punto(0,4)
const p2 = new Punto(3,0)
*/

const p1 =  Object.create(Punto)
p1.init(0,4)
const p2 =  Object.create(Punto)
p2.init(7,8)