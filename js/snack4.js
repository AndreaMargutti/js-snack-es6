// ! SNACK 4 (30/08/2024)
/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// # Fase di preparazione
//creo array per squadre di calcio
const teams = [
    {
        name: 'Modena',
        score: 0,
        foul: 0
    },
    {
        name: 'Barcelona',
        score: 0,
        foul: 0
    },
    {
        name: 'Varese',
        score: 0,
        foul: 0
    },
    {
        name: 'Inter',
        score: 0,
        foul: 0
    },
    {
        name: 'Real Madrid',
        score: 0,
        foul: 0
    }
];

console.log(teams);

//per ogni elemento dell'array...
teams.forEach((team) => {
    //generiamo un numero da riassegnare a score
    team.score = Math.floor(Math.random() * 50 + 1);
    //genero un numero casuale per i falli
    team.foul = Math.floor(Math.random() * 10 + 1)
})

console.log(teams);