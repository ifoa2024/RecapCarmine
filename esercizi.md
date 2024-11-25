# Esercizi

## Es - 1
Dato un array di oggetti rappresentanti degli sviluppatori:

- crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa

```
    let list = [
      { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];
```

### EXTRA

- Generalizza la funzione e fai scegliere all’utente il Continente e il Linguaggio di programmazione


## Es - 2
Dato un array di oggetti:

- crea una funzione che ritorni un array
- e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
    - “Awe < firstName >, io lavoro con < language here >, ma effettivamente è meglio javascript”

### ES.
```
    let list = [
      { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    ];
```

### Risultato che devi ottenere :
```
    [
      { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
        greeting: 'Hi Sofia, what do you like the most about Java?'
      },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?'
      },
      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
        greeting: 'Hi Madison, what do you like the most about Ruby?'
      } 
    ];
```

## Es - 3 
Dato un array di oggetti:
- crea una funzione che ritorni
    - `true` se c’è almeno una persona che ha gli occhi verdi; 
    - `false` se nessuno ha gli occhi verdi

```
    let list = [
      { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
      { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
      { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
    ];
```

**Risultato**: true

## Es - 4 
Dato un Array di oggetti:
- crea una funzione che ritorni la seguente stringa:
    - **firstName, country** del primo sviluppatore Python che trova
    - **Non ci sono sviluppatori Python** nel caso in cui non ci siano.

```
    let list = [
      { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
      { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
    ];
```

**Risultato**:  `Victoria, Puerto Rico`.

### EXTRA
- Generalizza la funzione e fai scegliere all’utente il Linguaggio di programmazione.


## Es - 5
Dato un array di oggetti:

- creare una funzione che permetta di mostrare un messaggio di alert:
    - se **logged=true**: mostrare il messaggio “L’utente è stato registrato.”
    - se **logged=false**: mostrare il messaggio “L’utente non è registrato.”

```
    let list = [
        { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
        { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
    ];
```

- Utilizzare alert() → metodo che fa visualizzare una finestra di pop-up per mostrare un messaggio di avviso all’utente
```
    alert('Messaggio di avviso per l'utente');
```

## Es - 6
Tramite una finestra di pop-up, catturare l’input dell’utente e mostrarlo all’interno di un paragrafo.
- Utilizzare **prompt()** → metodo che fa visualizzare una finestra di pop-up per far inserire un dato all’utente
```
    let text = prompt('Come ti chiami?');
    console.log(text);
```

## Es - 7
Dato un array contenente i giorni della settimana creare una funzione che inserisca all’interno del tag ul con id “openings” una lista non numerata con all’interno i giorni della settimana con gli orari delle aperture del negozio.

```
    Lunedi : dalle 9.00 alle 18.00
    Martedi : dalle 9.00 alle 18.00
```

```
    let openingDays =[
      {day : 'monday' , from : '9.00' , to : "18.00"},
      {day : 'tuesday' , from : '9.00' , to : "18.00"},
      {day : 'wednesday' , from : '9.00' , to : "18.00"},
      {day : 'thursday' , from : '9.00' , to : "18.00"},
      {day : 'saturday' , from : '9.00' , to : "18.00"},
      {day : 'sunday' , from : '9.00' , to : "18.00"},
    ]
```

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul id="openings"></ul>
    
      <script src="./main.js"></script>
    </body>
    </html>
```

## Es - 8
Dato un titolo e un bottone creare:
- una funzione di javascript che al click sul bottone aggiunga e tolga una classe che cambi il colore

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <style>
      .color {
        color : red;
      }
    </style>
    </head>
    <body>
        <h1>Odio Javascript ! ... ma sempre meglio di PHP</h1>
    
    <script>
    
    </script>
    </body>
    </html>
```

## Es - 9
Creare delle card contenenti:

- una sezione che comprenda firstname e age della persona
- la skill corrispondente a language
- e la bandiera (flag) di appartenenza
- per le bandiere utilizzare questa libreria CDN: https://cdnjs.com/libraries/flag-icon-css

```
    let list = [
        { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
        { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
        { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
        { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
        { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
        { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
        { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
        { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
        { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
        { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
    ];
```

**Suggerimento**:
- Inserire il link della CDN delle bandiere nel file html
- per visualizzare le bandiere bisogna inserire due classi come nell’esempio:
    - flag-icon: per dare la dimensione della bandiera
    - flag-icon-siglabandiera: per mostrare la bandiera del paese
  ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
        <!-- CDN icone bandiere -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css" integrity="sha512-UwbBNAFoECXUPeDhlKR3zzWU3j8ddKIQQsDOsKhXQGdiB5i3IHEXr9kXx82+gaHigbNKbTDp3VY/G6gZqva6ZQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
        <i class="flag-icon flag-icon-us"></i>
        <i class="flag-icon flag-icon-fr"></i>
        <i class="flag-icon flag-icon-es"></i>
        <i class="flag-icon flag-icon-gb"></i>
        <i class="flag-icon flag-icon-de"></i>
        <i class="flag-icon flag-icon-co"></i>
        <i class="flag-icon flag-icon-jp"></i>
        <i class="flag-icon flag-icon-ch"></i>
        <i class="flag-icon flag-icon-ar"></i>
        <i class="flag-icon flag-icon-it"></i>
        
        <script src="./es7.js"></script>
    </body>
    </html>
```

- Siete liberi di creare il layout che piu’ vi piace.


## Es - 10
Dato un array di oggetti:

- crea una funzione che restituisca dei link di navigazione.
    - Creare una navbar (siete liberi di creare il layout che piu’ vi piace)
    - Visualizzare nella navbar il nome, il percorso della pagina e l’icona del link presenti nell’array
```
    let list = [
        { id: 1, linkName: 'home', page: 'home.html', icon: 'bi bi-house-door'},
        { id: 2, linkName: 'chi siamo', page: 'chi-siamo.html', icon: 'bi bi-people'},
        { id: 3, linkName: 'servizi', page: 'servizi.html', icon: 'bi bi-bicycle'},
        { id: 4, linkName: 'categorie', page: 'categorie.html', icon: 'bi bi-tag'},
        { id: 5, linkName: 'blog', page: 'blog.html', icon: 'bi bi-newspaper'},
        { id: 6, linkName: 'contatti', page: 'contatti.html', icon: 'bi bi-send'}
    ]
```

- Suggerimento:
    - inserire il link della CDN Icons Bootstrap
    - per visualizzare le icone utilizzare il tag <i>
    - per inserire in modo dinamico i valori dell’attributo class, utilizzare il metodo **setAttribute()**: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Icons Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    <body>
        <!-- Esempio di un link -->
        <a href="home.html">
            <i class="bi bi-house-door">home</i>
        </a>    
    </body>
    </html>
```

```
    // Nel file javascript
    
    // Catturo il tag i
    let linkIcon = document.querySelector('i');
    // Inserisco l'attributo class con i valori per visualizzare l'icona
    linkIcon.setAttribute('class', 'bi bi-house-door');
```

## Es - 11
- Creare una navbar utilizzando un componente di Bootstrap.
- Quando l’utente scrolla la pagina verso il basso, la navbar deve cambiare il background-color e deve aumentare l’altezza; viceversa, quando si scrolla verso l’alto, la navbar deve ritornare com’era prima.
- Utilizzare l’evento scroll


- Suggerimento:
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
      NB Devo dare position: fixed alla navbar, altrimenti NON la vedrò
     <nav class="navbar navbar-expand-lg bg-light fixed-top">
       ...
     </nav>
    
    </body>
    </html>
    
    // Nel file javascript
    
    // Catturare la navbar
    let navbar = document.querySelector('.navbar');
    
    // Associare l'evento scroll all'intero document
    document.addEventListener('scroll', () => {
      // Dobbiamo salvare lo spostamento della scrollbar sull'asse verticale
      let scrolled = window.scrollY;
      console.log(scrolled); // restituira' un numero che corrisponde allo spostamento in pixel
      if(scrolled > ...) {
        // Fai qualcosa
      } else {
        // altrimenti un'altra cosa
      }
    })
```

## Es -12
- Crea una piccola calcolatrice con le 4 operazioni di base:
    - due campi input per far inserire all’utente i numeri.
    - un campo select (oppure un altro modo) che permetta di selezionare il tipo di operazione
    - un pulsante che permetta di far eseguire l’operazione

### NOTE
- MOLTO IMPORTANTE FAR CAPIRE ALL’UTENTE QUALE OPERAZIONE STA ANDANDO A FARE


- Al click sul bottone far apparire il risultato a schermo e svuotare i due campi input
- creare il layout che piu’ vi piace

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <label for="num1">Num1:</label>
        <input type='number' id='num1'>
        
        <select name="pets" id="operation">
            <option value="">--Operazione--</option>
            <option value="sum">Somma</option>
            <option value="subtraction">Sottrazione</option>
            <option value="multiplication">Moltiplicazione</option>
            <option value="division">Divisione</option>
        </select>
        
        <label for="num2">Num2:</label>
        <input type='number' id='num2'>
        
        <p id='total'>Totale</p>
        <button>Fai il calcolo</button>
    <script>
    
    </script>
    </body>
    </html>
```

### EXTRA
- Al click sul tasto per ottenere il risultato svuotare gli input e inserire nel primo input il valore del risultato in modo tale da far continuare all’utente i calcoli
