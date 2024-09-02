// ! Snack 6 (02/09/24)
// TODO: Crea un array di oggetti che rappresentano degli animali. Ogni animale ha un nome, una famiglia e una classe. Crea un nuovo array con la lista dei mammiferi.

// # Fase di preparazione
//creo l'array di animali
const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'pollo',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'lucertola',
        famiglia: 'lacertidi',
        classe: 'rettili'
    },
    {
        nome: 'delfino',
        famiglia: 'delfinidi',
        classe: 'mammiferi'
    },
    {
        nome: 'drago di comodo',
        famiglia: 'lacertodi',
        classe: 'rettili'
    },
];

console.log(animals);

//# Fase di elaborazione
//creo l'array di mammiferi filtrando l'array degli animali tramite la chiave 'classe'
const mammals = animals.filter(animal => { return animal.classe === 'mammiferi' });
console.log(mammals);