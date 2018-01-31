function saludarFamilia(apellido){
	return function saludaMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre}${apellido}`)
	}
}

const saludarHerrera = saludarFamilia("Herrera")
saludarHerrera("Jorge")


function prefijo(prefijo){
	return function palabra(palabra){
		console.log(`${prefijo}${palabra}`)
	}
}

const palabra = prefijo("es")
palabra("ta")


function postfijo(postfijo){
	return function palabra(palabra){
		console.log(`${palabra}${postfijo}`)
	}
}

const palabrapost = postfijo("dar")
palabrapost("an")
