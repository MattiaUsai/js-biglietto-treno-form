



const kmUser = Number(document.getElementById('kmUser'));//RECUPERA I KM DALL'UTENTE

const yearUser = Number(document.getElementById('userAge'));

const  kmPrice = 0.21;

const priceKmUser = kmPrice * kmUser ;
let price = priceKmUser;
const underAge = 18;
const over65 = 65;

const saleUnderAge = 20;
const saleOver65 = 40;

if (underAge>yearUser) {
   price= price - (price/100*saleUnderAge)
   
}else if(over65<yearUser) {
    price=price- (price/100*saleOver65)
}


price = price.toFixed(2);


let  currentText;
currentText = `
km da percorrere: ${kmUser}  
anni dell'utente: ${yearUser} 
prezzo al km ${kmPrice}€     
prezzo dei km da percorrere ${priceKmUser}€
prezzo finale ${price}€
`;



console.log(currentText);