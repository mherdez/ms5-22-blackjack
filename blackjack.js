
// const corazones = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH'];
// const treboles = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'];
// const diamantes = ['AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD'];
// const picas = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];
// function imprimeCarta( arreglo ) {
//   for( carta of arreglo ) {
//     document.body.innerHTML += `<img src="./assets/cartas/${carta}.png" alt="">`;
//   }
// }
// imprimeCarta( corazones );
// imprimeCarta( treboles );
// imprimeCarta( diamantes );
// imprimeCarta( picas );



// const baraja = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS' ];

// function imprimeCarta( arreglo ) {
//   for( carta of arreglo ) {
//     document.body.innerHTML += `<img src="./assets/cartas/${carta}.png" alt="">`;
//   }
// }
// imprimeCarta( baraja );


// const baraja = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// const palo   = ['H', 'C', 'S', 'D'];

// for( tipo of palo ) {
//   for( carta of baraja ) {
//     document.body.innerHTML += `<img src="./assets/cartas/${carta}${tipo}.png" alt="">`;
//     }
//   }

// const baraja = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// const palo   = ['H', 'C', 'S', 'D'];

// palo.map( tipo =>
//   baraja.map( carta =>
//     document.body.innerHTML += `<img src="./assets/cartas/${carta}${tipo}.png" alt="">`
//   )
// )

// let bajara;

// const crearBaraja = () => {
//   const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//   const palo   = ['H', 'C', 'S', 'D'];

//   baraja = [palo.map( tipo =>
//     valores.map( carta =>
//       carta+tipo
//     )
//   )].flat(2);
// }

// crearBaraja();
// baraja.map( carta => document.body.innerHTML += `<img src="./assets/cartas/${carta}.png" alt="">`)


const container = document.querySelector('#container');
const btnSacarCarta = document.querySelector('#btnSacarCarta');

let bajara;
let numeroCartas = 0;

const crearBaraja = () => {
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const palo   = ['H', 'C', 'S', 'D'];

  baraja = [palo.map( tipo =>
    valores.map( carta =>
      carta+tipo
    )
  )].flat(2);
}

const sacarCarta = (carta) => {
  container.innerHTML += `<img src="./assets/cartas/${carta}.png" alt="">`;
  numeroCartas++;
}

crearBaraja();

btnSacarCarta.addEventListener('click', () => {
  sacarCarta(baraja[numeroCartas]);
})

