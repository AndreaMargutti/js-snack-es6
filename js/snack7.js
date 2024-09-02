// ! SNACK 7 (02/09/24)
// TODO: Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un'età. Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

// # Fase di preparazione
//creo l'array
const people = [
    {
        name: 'Andrea',
        lastName: 'Margutti',
        age: 24
    },
    {
        name: 'Luca',
        lastName: 'Tommasini',
        age: 14
    },
    {
        name: 'Giovanni',
        lastName: 'Di Pasqua',
        age: 36,
    },
    {
        name: 'Alberto',
        lastName: 'Framindola',
        age: 18,
    },
    {
        name: 'Piero',
        lastName: 'Morizzani',
        age: 6,
    }
];
console.log(people);

// # Fase di elaborazione
//creo un array nuovo
const driverLicense = people.map(({ name, lastName, age }) => {
    let string = `${name} ${lastName}, avendo ${age} anni `
    let isCapable;
    if (age > 18) {
        isCapable = 'può guidare';
    } else {
        isCapable = 'non può guidare';
    };
    return string + isCapable;
});

console.log(driverLicense);