const StartWars7 = 'Start wars: El despertar de la Fuerza'
const pgStarWars7 = 13

const nameSacha = 'Sacha'
const ageSacha = 30

const nameSanti = 'Santi'
const ageSanti = 12

/*const canWatchStartWars7 = (name,age, isWithAdult = false) =>
{
	if (age >= pgStarWars7)
	{
		alert(`${name} puede pasar a ver ${StartWars7}`)
	}
	else if (isWithAdult)
	{
		alert(`${name} Puede pasar a ver ${StartWars7}
			Aunque su edead es ${age}, 
			debido a que se encuentra acompañado por un Adulto ${isWithAdult}`)
	}
	else 
	{
		alert(`${name} no puede pasar a ver ${StartWars7},
			tiene ${age} años, es necesario tener ${pgStarWars7}`)
	}
}*/

function canWatchStartWars7(name,age, isWithAdult = false)
{
	if (age >= pgStarWars7)
	{
		alert(`${name} puede pasar a ver ${StartWars7}`)
	}
	else if (isWithAdult)
	{
		alert(`${name} Puede pasar a ver ${StartWars7}
			Aunque su edead es ${age}, 
			debido a que se encuentra acompañado por un Adulto ${isWithAdult}`)
	}
	else 
	{
		alert(`${name} no puede pasar a ver ${StartWars7},
			tiene ${age} años, es necesario tener ${pgStarWars7}`)
	}
}

canWatchStartWars7(nameSacha,ageSacha)
canWatchStartWars7(nameSanti,ageSanti,true)