// ! Snack 5 (2/09/24)
// TODO: A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

//creo l'array di stringhe
const words = ['pippo', 'PLUTO', 'Paperino'];
console.log(words);

//creo il nuovo array partendo da quello precedente
const upperWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restLetter = word.substring(1).toLowerCase();

    return firstLetter + restLetter;
});

console.log(upperWords);