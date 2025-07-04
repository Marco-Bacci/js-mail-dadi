// -------------MAIL---------------
// // dichiaro array di lista di mails e const prompt mail cliente
const mail = [`marco@gmail.com` , `lily@icloud.com`,`chiara@hotmail.it` , `alex@gmail.com` , `jesus@paradise.com` , `Thomas@icloud.com` ]
const userMail = (prompt(`scrivi la tua email`))
let message

//  inizializzo ciclo for dove userMail deve essere contenuto in Mail
for(let i=0; i<mail.length; i++){
  if (userMail !== mail[i]){
    message = `NON sei in lista`;
  }
  else{
    message = `la tua mail è nella lista e puoi accedere alla festa!`}
}
console.log(message)

// ------------DADI-------------

// // dichiaro const numero random per pc e per giocatore
// const pcNum = Math.floor((Math.random()*6 +1))
// const playerNum = prompt(`scrivi un numero da 1 a 6`)
// let result
// // comparo il numero del pc con quello del player
// if( playerNum > pcNum){
//   result = `${playerNum} è maggiore di ${pcNum} e quindi hai VINTO!`
// }
// else if(playerNum < pcNum){
//   result = `${playerNum} è minore di ${pcNum} e quindi hai PERSO`
// }
// else{
//   result = `${playerNum} è uguale a ${pcNum} e quindi hai PAREGGIATO`
// }
// console.log(result)







    

    
    
  