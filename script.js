let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
function contaSviluppatoriEuropei(lista) {
    return lista.filter(sviluppatore => sviluppatore.continent === 'Europe' && sviluppatore.language === 'JavaScript').length;
}

console.log(contaSviluppatoriEuropei(list)); // Output: 1

function aggiungiGreeting(lista) {
    return lista.map(sviluppatore => {
        sviluppatore.greeting = `Awe ${sviluppatore.firstName}, io lavoro con ${sviluppatore.language}, ma effettivamente è meglio javascript`;
        return sviluppatore;
    });
}

let list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

let nuovaLista = aggiungiGreeting(list2);
console.log(nuovaLista);

function haOcchiVerdi(lista) {
    return lista.some(persona => persona.eyes === 'Green');
}

let list3 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
];

console.log(haOcchiVerdi(list3)); // Output: true

function trovaPrimoSviluppatorePython(lista) {
    let sviluppatorePython = lista.find(sviluppatore => sviluppatore.language === 'Python');
    if (sviluppatorePython) {
        return `${sviluppatorePython.firstName}, ${sviluppatorePython.country}`;
    } else {
        return "Non ci sono sviluppatori Python";
    }
}

let list4 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

console.log(trovaPrimoSviluppatorePython(list4)); // Output: Victoria, Puerto Rico

function mostraMessaggioRegistrazione(lista) {
    lista.forEach(persona => {
        if (persona.logged) {
            alert(`L'utente ${persona.firstName} è stato registrato.`);
        } else {
            alert(`L'utente ${persona.firstName} non è registrato.`);
        }
    });
}

let list5 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
];

mostraMessaggioRegistrazione(list5);



let text = prompt('Come ti chiami?');
console.log(text);