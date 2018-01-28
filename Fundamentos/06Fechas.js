//const nacimiento = new Date(año,mes-1,dia)
const nacimiento = new Date(1987,01,3)
const hoy = new Date()
const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMinutos = tiempo / 60
const tiempoHoras = tiempoMinutos / 60



const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
let i = 3
diasSemana[3]

console.log(diasSemana[proximoCumpleanos.getDay()])