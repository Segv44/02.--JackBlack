
// Ya revise varias veces el código y no encuentro el o los errores, gracias por tu ayuda.

(() => {
    'use strict';
    (() => {
            'use strict';
        let deck = [];
        const tipos = ['C', 'D', 'H', 'S'];
        const especiales = ['A', 'J', 'Q', 'K'];

        let puntosJugador = 0;
            puntosComputadora = 0;

        // Referencias HTML
        const btnPedir = document.querySelector('#btnPedir');
        const btnDetener = document.querySelector('#btnDetener');
        const btnNuevo = document.querySelector('#btnNuevo');

        const divCartasJugador = document.querySelector('#jugador-cartas');
        const divCartasComputadora = document.querySelector('#computadora-cartas');
        const puntosHTML = document.querySelectorAll('small');


        // Esta funcion crea un nuevo deck
        const crearDeck = () => {

            for (let i = 2; i <= 10; i++) {
                for (let tipo of tipos) {
                    deck.push(i + tipo);
                    
                }
            
            }    

            for (let tipo of tipos) {
                for (let esp of especiales) {
                    deck.push(esp + tipo);
                }
            }

            // console.log(deck);
            deck = _.shuffle(deck);
            return deck;
        }

        crearDeck();

        // Esta funcion me permite tomar una carta
        const pedirCarta = () => {
            if (deck.length === 0) {
                throw 'No hay cartas en el deck';
            }
            const carta = deck.pop();

            return carta;
            
        }

        pedirCarta();

        // Pedir carta

        const valorCarta = (carta) => {
            
            const valor = carta.substring(0, carta.length - 1);
            return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10 
            : valor * 1;

        }



        // Turno de la computadora
        const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/AS.png">
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta);

            if (puntosMinimos > 21) {
                break;
            }

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
            setTimeout(() => {
                if (puntosComputadora === puntosMinimos) {
                    alert('Nadie gana');
                } else if (puntosMinimos > 21) {
                    alert('Computadora gana');
                } else if (puntosComputadora > 21) {
                    alert('Jugador gana');
                } else {
                    alert('Computadora gana');
                }
            }, 100);
        }


        // Eventos
        btnPedir.addEventListener('click', () => {
            const carta = pedirCarta();

            puntosJugador = puntosJugador + valorCarta(carta);

            puntosHTML[0].innerText = puntosJugador;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');

            divCartasJugador.append( imgCarta);
            if (puntosJugador > 21) {
                console.warn('Buu, Perdiste');
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                turnoComputadora(puntosJugador);

            } else if (puntosJugador=== 21) {
                console.warn('21, Lo lograste');
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                turnoComputadora(puntosJugador);
            }
        });


        // Detener el juego
        btnDetener.addEventListener('click', () => {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            
            turnoComputadora(puntosJugador);
        });


        // Nuevo juego
        btnNuevo.addEventListener('click', () => {
            deck = [];
            deck = crearDeck();

            puntosJugador = 0;
            puntosComputadora = 0;

            puntosHTML[0].innerText = 0;
            puntosHTML[1].innerText = 0;

            divCartasComputadora.innerHTML = '';
            divCartasJugador.innerHTML = '';

            btnPedir.disabled = false;
            btnDetener.disabled = false;

        });



        

    });
 

});


// let deck = [];
// const tipos = ['C', 'D', 'H', 'S'];
// const especiales = ['A', 'J', 'Q', 'K'];

// let puntosJugador = 0;
//     puntosComputadora = 0;

// // Referencias HTML
// const btnPedir = document.querySelector('#btnPedir');
// const btnDetener = document.querySelector('#btnDetener');
// const btnNuevo = document.querySelector('#btnNuevo');

// const divCartasJugador = document.querySelector('#jugador-cartas');
// const divCartasComputadora = document.querySelector('#computadora-cartas');
// const puntosHTML = document.querySelectorAll('small');


// // Esta funcion crea un nuevo deck
// const crearDeck = () => {

//     for (let i = 2; i <= 10; i++) {
//         for (let tipo of tipos) {
//             deck.push(i + tipo);
            
//         }
       
//     }    

//     for (let tipo of tipos) {
//         for (let esp of especiales) {
//             deck.push(esp + tipo);
//         }
//     }

//     // console.log(deck);
//     deck = _.shuffle(deck);
//     return deck;
// }

// crearDeck();

// // Esta funcion me permite tomar una carta
// const pedirCarta = () => {
//     if (deck.length === 0) {
//         throw 'No hay cartas en el deck';
//     }
//     const carta = deck.pop();

//     return carta;
    
// }

// pedirCarta();

// // Pedir carta

// const valorCarta = (carta) => {
    
//     const valor = carta.substring(0, carta.length - 1);
//     return (isNaN(valor)) ? 
//     (valor === 'A') ? 11 : 10 
//     : valor * 1;

// }



// // Turno de la computadora
// const turnoComputadora = (puntosMinimos) => {
// do {
//     const carta = pedirCarta();

//     puntosComputadora = puntosComputadora + valorCarta(carta);
//     puntosHTML[1].innerText = puntosComputadora;

// // <img class="carta" src="assets/cartas/AS.png">
//     const imgCarta = document.createElement('img');
//     imgCarta.src = `assets/cartas/${carta}.png`;
//     imgCarta.classList.add('carta');
//     divCartasComputadora.append( imgCarta);

//     if (puntosMinimos > 21) {
//         break;
//     }

//  } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
//     setTimeout(() => {
//         if (puntosComputadora === puntosMinimos) {
//             alert('Nadie gana');
//         } else if (puntosMinimos > 21) {
//             alert('Computadora gana');
//         } else if (puntosComputadora > 21) {
//             alert('Jugador gana');
//         } else {
//             alert('Computadora gana');
//         }
//     }, 100);
// }


// // Eventos
// btnPedir.addEventListener('click', () => {
//     const carta = pedirCarta();

//     puntosJugador = puntosJugador + valorCarta(carta);

//     puntosHTML[0].innerText = puntosJugador;

//     const imgCarta = document.createElement('img');
//     imgCarta.src = `assets/cartas/${carta}.png`;
//     imgCarta.classList.add('carta');

//     divCartasJugador.append( imgCarta);
//     if (puntosJugador > 21) {
//         console.warn('Buu, Perdiste');
//         btnPedir.disabled = true;
//         btnDetener.disabled = true;
//         turnoComputadora(puntosJugador);

//     } else if (puntosJugador=== 21) {
//         console.warn('21, Lo lograste');
//         btnPedir.disabled = true;
//         btnDetener.disabled = true;
//         turnoComputadora(puntosJugador);
//     }
// });


// // Detener el juego
// btnDetener.addEventListener('click', () => {
//     btnPedir.disabled = true;
//     btnDetener.disabled = true;
    
//     turnoComputadora(puntosJugador);
// });


// // Nuevo juego
// btnNuevo.addEventListener('click', () => {
//     deck = [];
//     deck = crearDeck();

//     puntosJugador = 0;
//     puntosComputadora = 0;

//     puntosHTML[0].innerText = 0;
//     puntosHTML[1].innerText = 0;

//     divCartasComputadora.innerHTML = '';
//     divCartasJugador.innerHTML = '';

//     btnPedir.disabled = false;
//     btnDetener.disabled = false;

// });


