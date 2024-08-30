// ! SNACK 1 (29/08/2024)
/*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/

// # Fase di preparazione
//genero l'array della lista di vip invitati
const vipList = ['Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];
//loggo il tavolo dei vip

//creo un array vuoto in cui andranno inserite le informazioni del tavolo e dei vip
const vipTable = [];

//per ogni vip...
vipList.forEach((vip, i) => {
    //...creo un oggetto con le seguenti chiavi
    const vipInfo = {
        tableName: 'Tavolo VIP',
        vip,
        place: ++i
    }
    //vado ad inserirli nell'array dei vip
    vipTable.push(vipInfo);
});

//stampo l'array del tavolo dei vip
console.log(vipTable);