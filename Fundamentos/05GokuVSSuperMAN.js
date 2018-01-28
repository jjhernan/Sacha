let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguienVivos = () => vidaGoku > 0 && vidaSuperman > 0 

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER

const gokuSigueVivo = () => vidaGoku > 0 

/*function ambosSiguienVivos()
{
	return vidaGoku > 0 && vidaSuperman > 0 
}
*/
let round = 0

while (ambosSiguienVivos())
{
	round++
	console.log(`Round ${round}`)
	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if (golpeGoku > golpeSuperman)
	{
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
		vidaSuperman = vidaSuperman - golpeGoku
		console.log(`Superman queda con vida de ${vidaSuperman}`)
	} 
	else 
	{
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Goku queda con vida de ${vidaGoku}`)

	}
}

if (gokuSigueVivo()){
	console.log(`Goku gano la pelea la vida de Goku es ${vidaGoku}`)
} else {
	console.log(`Superman gano la pelea Su vida es de ${vidaSuperman}`)
}
