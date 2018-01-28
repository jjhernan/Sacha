function platzom(str)
{
	let tranlation = str 
	// Si la palabra termina en ar, se le quietan esos 2 caracteres
	if (str.toLowerCase().endsWith('ar'))
	{
		tranlation = str.slice(0,-2)
	}
	// si la palabra inicia con z, se le añade pe
	if (str.toLowerCase().startsWith('z'))
	{
		tranlation += 'pe'
	}
	// si la palabra traducida tiene 10 o mas letras se debe partir a la m itad y unir con un guio por el medio
	const length = tranlation.length
	if (length >=10)
	{
		const firtsHalf = tranlation.slice(0,Math.round(length / 2))
		const secondHalf = tranlation.slice(Math.round(length / 2))
		tranlation = `${firtsHalf}-${secondHalf}`
	}	

	// Si la palabra original es un palindromo
	// nunfuna regla anterioir cuenta y se devuelve
	// la misma palabra intercalando mayusculas y minusculas

	function minMay(str)
	{
		const length = str.length
		let tranlation = ''
		let capitalize = true
		for (let i = 0; i< length;i++)
		{
			const char = str.charAt(i)
			tranlation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return tranlation
	}

	const reverse = (str) => str.split('').reverse().join('')
	if (str == reverse(str))
	{
		return minMay(str)
	}



	return tranlation
}

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("abecedario"))
console.log(platzom("sometemos"))