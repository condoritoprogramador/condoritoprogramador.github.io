//0 Iniciar Juego 
alert('Iniciar Juego')
alert('Elige tu Ataque')

//1 Elegir ataque de jugadores
let player = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijera')

if(player == 0) {
    alert('Elegiste Piedra')
}   else if (player == 1){
    alert('Elegiste Papel')
}   else if (player == 2){
    alert('Elegiste Tijera')
}

//2 Elegir ataque aleatorio del Enemigo
let enemy = Math.round(Math.random()*2)

if (enemy == 0){
    alert('El enemigo eligio Piedra')
}   else if(enemy == 1){
    alert('El enemigo eligio Papel')
}   else if(enemy == 2){
    alert('El enemigo eligio Tijera')
}

//3 Mostrar Resultado 
if(player == enemy){
    alert('Empate!')
}   else if(player == 0 && enemy == 2){
    alert('Ganaste =D')
}   else if(player == 1 && enemy == 0){
    alert('Ganaste =D')
}   else if(player == 2 && enemy == 1){
    alert('Ganaste =D')
}   else {
    alert('Perdiste =(')
}