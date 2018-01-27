const nombre = "Jorge"
const dias = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
]

function correr()
{
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}
let totalKMS =0
for (let i = 0; i< dias.length; i++)
{
	const kms = correr()
	totalKMS +=kms
	console.log(`El dia ${dias[i]} ${nombre} corrio ${kms} kms`)
}