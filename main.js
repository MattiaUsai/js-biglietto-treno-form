



let kmUser = document.getElementById('kmUser');//RECUPERA I KM DALL'UTENTE
kmUser = +(kmUser.value);//RECUPERA IL VALORE DEL CAMPO DEI CHILOMETRI E LO CAMBIA DA STRING À NUMBER

let yearUser = document.getElementById('userAge');//RECUPERA L'ETA DALL'UTENTE
yearUser = +(yearUser.value);//RECUPERA IL VALORE DEL CAMPO DELL'ETA  E LO CAMBIA DA STRING À NUMBER

const kmPrice = 0.21;//PREZZO AL KM

let priceKmUser = kmPrice * kmUser;//CALCOLO DEL PREZZO PER I CHILOMETRI PERCORSI DALL'UTENTE














const button = document.getElementById("ciao");

button.addEventListener('click', function() {
    console.log("ho cliccato il bottone")
    console.log (yearUser)
    console.log (kmUser)
    console.log (kmPrice)
    console.log (priceKmUser)


})




















// const  kmPrice = 0.21;

// const priceKmUser = kmPrice * kmUser ;
// let price = priceKmUser;
// const underAge = 18;
// const over65 = 65;

// const saleUnderAge = 20;
// const saleOver65 = 40;

// if (underAge>yearUser) {
//    price= price - (price/100*saleUnderAge)
   
// }else if(over65<yearUser) {
//     price=price- (price/100*saleOver65)
// }


// price = price.toFixed(2);


