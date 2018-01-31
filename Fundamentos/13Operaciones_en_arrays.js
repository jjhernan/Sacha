//spread operator son 3 puntos ...
/*function suma(...numeros){
	let acum = 0
	for (let i = 0; i < numeros.length; i++){
		acum += numeros[i]
	}
	return acum
}*/

function suma(...numeros){
	return numeros.reduce(function(acum,numero){
		acum = acum + numero
		return acum
	},0)
}

/*function dobles(...numeros){
	let acum = 0;
	const resultado = []
	for (let i = 0; i < numeros.length; i++){
		resultado.push(numeros[i]*2) 	
	}
	return resultado
}*/

function dobles(...numeros){
	return numeros.map(function(numero){
	return numero *2
	})	
}
//arrow function 
const dobles = (...numeros) => numeros.map(numero => numero*2)


dobles(4,8,12,8954)


function pares(...numeros){
	const resultado = []
	const length = numeros.length
	for (let i = 0; i < length; i++){
		const numero = numeros[i]
		if(numero % 2 ==0){
			resultado.push(numero)
		}else {
			console.log("NP")
		}
	}
	return resultado
}


function pares(...numeros){
	return numeros.filter(function(numero){
	return numero % 2 ==0	
	})
}

//arrow function 
const pares = (...numeros) => numeros.filter(numero => numero % 2 ==0)


pares (2,3,4,5,6,7,8,9)