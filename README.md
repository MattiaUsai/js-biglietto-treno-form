Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!

1-- CHIEDI ALL'UTENTE L'ETA E ASSEGNÀ UNÀ VARIABILE USERAGE
2-- CHIEDI ALL'UTENTE I KM CHÈ DEVE PERCORRERE E ASSEGNA UNÀ VARIABILE KMUSER
3-- TRASFORMA USERAGE E KMUSER DA STRING A NUMBER
4-- ASSEGNA UNA VARIABILE AL PREZZO AL KM KMPRICE
5-- CALCOLA IL PREZZO DEI KM DELL'UTENTE FACENDO KMUSER * KMPRICE E ASSEGNALE UNÀ VARIABILE PRICEKMUSER
6-- ASSEGNA UNÀ VARIABILE ALLO SCONTO PER MINORENNI  DISCOUNTUNDERAGE
7-- ASSEGNÀ UNÀ VARIABILE ALLO SCONTO PER OVER65 DISCOUNTOVERAGE
8-- CALCOLA IL PREZZO SE L'UTENTE è MINORENNE O SE L'UTENTE ÀPIU DI 65 ANNI
9-- ARROTONDA A 2 CIFRE DOPO LA VIRGOLA
10-- QUANDO VIENE CLICCATO IL BOTTONE GENERA GENERA IL PREZZO IN PAGINA
11-- QUANDO VIENE CLICCATO IL BOTTONE RESETTA I CAMPI DI INPUT VENGONO PULITI
