
// dichiaro array di lista di mails e const prompt mail cliente
const mail = [`marco@gmail.com` , `lily@icloud.com`,`chiara@hotmail.it` , `alex@gmail.com` , `jesus@paradise.com` , `Thomas@icloud.com` ]
const userMail = (prompt(`scrivi la tua email`))
let message = `la tua mail è nella lista e puoi accedere alla festa!`

for(let i=0; i<mail.length; i++){
  if (userMail === mail[i])
    console.log(message)
  else
  console.log(`Non sei in lista`)
}
  

    
    
  