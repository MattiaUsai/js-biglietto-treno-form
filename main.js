





const btnGenerate = document.getElementById ("generate");
const btnReset = document.getElementById ("reset");




btnGenerate.addEventListener('click', function(){
    let userName = document.getElementById('name');//RECUPERA IL NOME DALL'UTENTE
    userName = (userName.value);//RECUPERA IL VALORE DEL CAMPO DEL NOME 

    let kmUser = document.getElementById('kmUser');//RECUPERA I KM DALL'UTENTE
    kmUser = +(kmUser.value);//RECUPERA IL VALORE DEL CAMPO DEI CHILOMETRI E LO CAMBIA DA STRING À NUMBER

    let yearUser = document.getElementById('userAge');//RECUPERA L'ETA DALL'UTENTE
    yearUser = +(yearUser.value);//RECUPERA IL VALORE DEL CAMPO DELL'ETA  E LO CAMBIA DA STRING À NUMBER

    const kmPrice = 0.21;//PREZZO AL KM

    let priceKmUser = kmPrice * kmUser;//CALCOLO DEL PREZZO PER I CHILOMETRI PERCORSI DALL'UTENTE
    
    const underAge = 18;// variabile eta minorenni
    const overAge = 65;//variabileeta over 65

    const discountUnder = 20; //variabile sconto minorenni
    const discountOver = 40; //variabile sconto over65
    let userDiscount = 0;

    if (underAge>yearUser) {
        priceKmUser= priceKmUser - (priceKmUser/100*discountUnder);
        userDiscount = discountUnder;
    
    }else if(overAge<yearUser) {
        priceKmUser=priceKmUser- (priceKmUser/100*discountOver);
        userDiscount = discountOver;
    }


    priceKmUser = priceKmUser.toFixed(2);
    const price= priceKmUser;

    let tiketPrice = document.getElementById('tiketprice');
    tiketPrice.append(`  ${price}`);

    let tiketName = document.getElementById('tiketname');
    tiketName.append(`  ${userName}`);

    const tiketDistance = document.getElementById('tiketdistance');
    tiketDistance.append(`  ${kmUser}`)

    const tiketDiscount = document.getElementById('tiketdiscount');
    tiketDiscount.append(`  ${userDiscount}`)

    const tiketAge = document.getElementById('tiketage');
    tiketAge.append(`  ${yearUser}`)

        
    
    console.log (yearUser)
    console.log (kmUser)
    console.log (kmPrice)
    console.log (priceKmUser)
    console.log (tiketPrice)
    console.log (userName)
    
 
})









reset.addEventListener('click', function() {
    console.log("ho cliccato il bottone")
    


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


