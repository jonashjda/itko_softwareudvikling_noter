# JavaScript Guide
- [JavaScript Guide](#javascript-guide)
- [Variable](#variable)
- [Indlæs brugerinputs + vis output](#indlæs-brugerinputs--vis-output)
  - [Tekstfelt](#tekstfelt)
  - [Dropdown-menu](#dropdown-menu)
  - [Vis output i tekstfelt](#vis-output-i-tekstfelt)
- [If-statements](#if-statements)
- [Switch-statements](#switch-statements)
- [Loops](#loops)
  - [For-loops](#for-loops)
  - [While-loops](#while-loops)
  - [Do-while-loops](#do-while-loops)
- [Functions](#functions)
- [Arrays](#arrays)
  - [Oprettelse af et array](#oprettelse-af-et-array)
  - [Aflæs element i array](#aflæs-element-i-array)
  - [Tilføj elementer til array](#tilføj-elementer-til-array)
  - [Fjern elementer fra et array](#fjern-elementer-fra-et-array)
- [Classes/objects](#classesobjects)
- [Operators](#operators)

<div class="page"/>

# Variable

Template:

```jsx
let variableName = value; // Brug 'let' for variable, der kan ændres
const constantName = value; // Brug 'const' for konstante værdier
```

Example:

```jsx
let age = 25; // Definer en variabel, der kan ændres
console.log(age); // 25

age = 30; // Opdatering af værdien
console.log(age); // 30

const birthYear = 1995; // Definer en konstant
console.log(birthYear); // 1995
```
<div class="page"/>

# Indlæs brugerinputs + vis output

## Tekstfelt
```jsx
// Eksempel på tekstfelt i p5js - i setup() funktion
labelVariabel = createSpan('Varighed (minutter):');
labelVariabel.position(10, 70);
textVariabel = createInput();
textVariabel.position(150, 70);

// Læs input fra tekstfelt (læses som string)
let brugerInput;
brugerInput = textVariabel.value();

// Hvis input skal læses som et tal, brug disse i stedet:
brugerInput = parseFloat(textVariabel.value()); // Decimaltal
brugerInput = parseInt(textVariabel.value()); // Hele tal


```



## Dropdown-menu
```jsx
// Eksempel på dropdown-menu i p5js - i setup() funktion
labelVariabel = createSpan('Aktivitetsniveau:');
labelVariabel.position(10, 110);
dropdownVariabel = createSelect();
dropdownVariabel.position(150, 110);
dropdownVariabel.option('Mulighed 1');
dropdownVariabel.option('Mulighed 2');
dropdownVariabel.option('Mulighed 3');

// Læs input fra dropdown
let brugerInput;
brugerInput = dropdownVariabel.value();

// Hvis brugeren har valgt 'Mulighed 1', er dette nu gemt i variabel brugerInput
```

## Vis output i tekstfelt
```jsx
// Eksempel på tekstfelt til output i p5js - i setup() funktion
labelVariabel = createSpan('Varighed (minutter):');
labelVariabel.position(10, 70);
textVariabel = createInput();
textVariabel.position(150, 70);
textVariabel.attribute('readonly', '');

// Definer variable og gem resultater (eksempel)
let output = 5 + 5;

// Vis i tekstfelt (her vises 10 i outputfeltet)
textVariabel.value(output)
```


<div class="page"/>

# If-statements

Template:

```jsx
if (betingelse1) {
    // Kode, der udføres, hvis betingelse1 er sand
} else if (betingelse2) {
    // Kode, der udføres, hvis betingelse2 er sand
} else {
    // Kode, der udføres, hvis ingen af betingelserne er sande
}
```

Example:

```jsx
let number = -5;

if (number > 0) {
    console.log("Tallet er positivt.");
} else if (number < 0) {
    console.log("Tallet er negativt.");
} else {
    console.log("Tallet er nul.");
}

/* **Result (will be printed in console):
Tallet er positivt
*/
```

Forklaring:

1. **`if`betingelse**: `if (number > 0)` kontrollerer, om `number` er større end 0. Hvis det er sandt, udføres denne blok, og resten af betingelserne springes over.
2. **`else if`betingelse**: Hvis den første betingelse er falsk, kontrollerer `else if (number < 0)` i stedet, om `number` er mindre end 0. Hvis det er sandt, udføres denne blok.
3. **`else`**: Hvis ingen af de foregående betingelser er sande, udføres `else`blokken. Dette dækker tilfælde, hvor `number` er præcis 0.


<div class="page"/>

# Switch-statements

Template:

```jsx
switch (udtryk) {
    case værdi1:
        // Kodeblok for værdi1
        break;
    case værdi2:
        // Kodeblok for værdi2
        break;
    default:
        // Kodeblok hvis ingen værdier matcher
}
```

Example:

```jsx
let day = "Mandag";

switch (day) {
    case "Mandag":
        console.log("Ugen starter i dag!");
        break;
    case "Lørdag":
        console.log("Det er weekend! Slap af.");
        break
    case "Søndag":
        console.log("Det er weekend! Slap af.");
        break;
    default:
        console.log("Det er en almindelig hverdag.");
}

/* **Result (will be printed in console):
Ugen starter i dag!
*/
```

Forklaring:

1. **`switch (day)`**: Tjekker værdien af variablen `day`.
2. **`case "Mandag"`**: Hvis `day` er `"Mandag"`, udføres denne kodeblok.
3. **`case "Lørdag"` og `case "Søndag"`**: Hvis `day` matcher nogen af disse værdier, udføres den tilsvarende kodeblok.
4. **`default`**: Hvis ingen af værdierne matcher, udføres denne kodeblok.
5. **`break`**: Stopper eksekveringen, så de andre `case`blokke ikke udføres.


<div class="page"/>

# Loops

## For-loops

Template:

```jsx
for (initialisering; betingelse; inkrementering) {
	// Code to be executed in each iteration
}

```

Example:

```jsx
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]);
}

/* Result (will be printed in console):
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
*/
```

Forklaring:

1. **Initialisering**: `let i = 0` initialiserer loop-variablen `i` til 0.
2. **Betingelse**: `i < numbers.length` tjekker, om `i` er mindre end længden af `numbers`arrayet. Loopet fortsætter, så længe denne betingelse er sand (`true`).
3. **Inkrementering**: `i++` øger værdien af `i` med 1 efter hver iteration.
4. **Handling**: Inden i loopet bruges `console.log` til at udskrive hver værdi i arrayet til konsollen

<div class="page"/>


## While-loops

Template:

```jsx
while (betingelse) {
    // Kode, der udføres, så længe betingelsen er sand
}
```

Example:

```jsx
let i = 1;

while (i <= 5) {
    console.log("Tallet er:", i);
    i++; // Inkrementér variablen for at undgå et uendeligt loop
}

/* **Result (will be printed in console):
Tallet er: 1
Tallet er: 2
Tallet er: 3
Tallet er: 4
Tallet er: 5
*/
```

Forklaring:

1. **Betingelse**: `while (i <= 5)` betyder, at loopet vil fortsætte, så længe værdien af `i` er mindre end eller lig med 5.
2. **Handling**: Koden inde i loopet (`console.log("Tallet er:", i)`) udføres ved hver iteration.
3. **Inkrementering**: `i++` øger værdien af `i` med 1 efter hver iteration. Dette sikrer, at loopet stopper, når betingelsen ikke længere er sand.

<div class="page"/>


## Do-while-loops

Template:

```jsx
do {
    // Kode, der udføres mindst én gang
} while (betingelse);
```

Example:

```jsx
let i = 1;

do {
    console.log("Tallet er:", i);
    i++; // Inkrementér variablen
} while (i <= 5);

/* Result (will be printed in console):
Tallet er: 1
Tallet er: 2
Tallet er: 3
Tallet er: 4
Tallet er: 5
*/
```

Forklaring:

1. **Første kørsel**: Koden i `do`blokken udføres altid mindst én gang, uanset om betingelsen i `while` er sand eller ej.
2. **Betingelse**: Efter hver kørsel kontrolleres `while (i <= 5)` for at afgøre, om loopet skal fortsætte.
3. **Inkrementering**: `i++` øger værdien af `i` med 1 efter hver iteration.


<div class="page"/>

# Functions

Template:

```jsx
function functionName(parameters) {
    // Kode der skal udføres
    return someValue; // Optional: brug return for at sende en værdig tilbage
}

```

Example:

```jsx
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(3, 5);
console.log("The sum is:", result);

/* Result (will be printed in console):
The sum is: 8
*/
```

Forklaring:

1. **Funktionsdeklaration**: `function addNumbers(a, b)` erklærer en funktion med navnet `addNumbers`, der tager to parametre `a` og `b`.
2. **Logik**: Inde i funktionen lægges de to tal sammen (`a + b`), og resultatet returneres med nøgleordet `return`.
3. **Kald af funktionen**: `addNumbers(3, 5)` kalder funktionen med `3` og `5` som argumenter.
4. **Output**: `console.log` bruges til at udskrive resultatet i konsollen.


<div class="page"/>

# Arrays

## Oprettelse af et array

```jsx
let fruits = ["Æble", "Banan", "Appelsin"];
console.log(fruits);

/* Result (will be printed in console):
["Æble", "Banan", "Appelsin"]
*/

let Products = [‘Classic jerseys’, 1100, 7];
console.log(Products)

/* Result (will be printed in console):
['Classic jerseys', 1100, 7]
*/
```

## Aflæs element i array

```jsx
let Products = ['Cycling jerseys', 'Cycling jackets & Gillets', 'Shoes, Overshoes, & Socks'];
let Foundproduct = Products[1]

console.log(FoundProducts)

/* Result (will be printed in console):
Cycling jackets & Gillets
*/

```

## Tilføj elementer til array

Tilføj til slutningen:

```jsx
let fruits = ["Æble", "Banan", "Appelsin"];
fruits.push("Mango");

console.log(fruits);

/* Result (will be printed in console):
["Æble", "Banan", "Appelsin", "Mango"]
*/
```

Tilføj til starten:

```jsx
let fruits = ["Æble", "Banan", "Appelsin", "Mango"];
fruits.unshift("Jordbær");

console.log(fruits);

/* Result (will be printed in console):
["Jordbær", "Æble", "Banan", "Appelsin", "Mango"]
*/
```

Tilføj (eller ændr) et specifikt sted (eksempel fra slides):

```jsx
let Products = ['Cycling jerseys', 'Cycling jackets & Gillets', 'Shoes, Overshoes, & Socks'];
Products[3] = 'Gloves & Mitts'

console.log(Products)

/* Result (will be printed in console):
['Cycling jerseys', 'Cycling jackets & Gillets', 'Shoes, Overshoes, & Socks', 'Gloves & Mitts']
*/
```

## Fjern elementer fra et array

Fjern fra slutningen:

```jsx
let fruits = ["Jordbær", "Æble", "Banan", "Appelsin", "Mango"];
let lastFruit = fruits.pop();

console.log(lastFruit); // "Mango"
console.log(fruits);

/* Result (will be printed in console):
["Jordbær", "Æble", "Banan", "Appelsin"]
*/
```

Fjern fra starten:

```jsx
let fruits = ["Jordbær", "Æble", "Banan", "Appelsin"];
let firstFruit = fruits.shift();

console.log(firstFruit); // "Jordbær"
console.log(fruits);

/* Result (will be printed in console):
["Æble", "Banan", "Appelsin"]
*/
```

Fjern specifikke elementer (eksempel fra slides):

```jsx
let Products = ['Cycling jerseys', 'Cycling jackets & Gillets', 'Shoes, Overshoes, & Socks', 'Gloves & Mitts'];
delete Products[2]; //Sletter værdien i index 2 (ændrer ikke array-længde)

/* Result (will be printed in console):
['Cycling jerseys', 'Cycling jackets & Gillets', empty, 'Gloves & Mitts']
*/
```

Fjern/erstat elementer:

```jsx
let fruits = ["Æble", "Banan", "Appelsin"];
fruits.splice(1, 1, "Pære"); // Fjerner 1 element fra indeks 1 og indsætter "Pære"

console.log(fruits);

/* Result (will be printed in console):
["Æble", "Pære", "Appelsin"]
*/
```


<div class="page"/>

# Classes/objects

Template:

```jsx
class ClassName {
    constructor(parameter1, parameter2) {
        this.property1 = parameter1;
        this.property2 = parameter2;
    }

    methodName() {
        // Kode for metoden
    }
}
```

Example:

```jsx
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hej! Mit navn er ${this.name}, og jeg er ${this.age} år gammel.`);
    }
}

// Opret en instans af klassen = **et objekt**
let person1 = new Person("Karl", 25);

// Brug den metode, der er indbygget i klassen
person1.introduce();

/* Result (will be printed in console):
Hej! Mit navn er Karl, og jeg er 25 år gammel.
*/
```

Forklaring:

1. **`class Person`**: Definerer en klasse ved navn `Person`.
2. **`constructor(name, age)`**: En speciel metode, der bruges til at initialisere objektets egenskaber (`this.name` og `this.age`) med værdier fra argumenterne.
3. **`introduce`**: En metode i klassen, der udskriver en besked.
4. **Oprettelse af instans**: `new Person("Karl", 25)` opretter et objekt af klassen `Person` med navnet "Karl" og alderen 25.
5. **Metodekald**: `person1.introduce()` kalder metoden `introduce` for `person1`.


<div class="page"/>

# Operators

Comparison operators:

| **Operator** | **Forklaring** | **Eksempel** | **Resultat** |
| --- | --- | --- | --- |
| `==` | Tjekker om værdierne er **lige** (type konverteres, hvis nødvendigt). | `5 == "5"` | `true` |
| `===` | Tjekker om værdierne og typerne er **strengt lige**. | `5 === "5"` | `false` |
| `!=` | Tjekker om værdierne er **ulige**. | `5 != "6"` | `true` |
| `!==` | Tjekker om værdierne eller typerne er **strengt ulige**. | `5 !== "5"` | `true` |
| `<` | Tjekker om venstre værdi er **mindre** end højre værdi. | `5 < 10` | `true` |
| `>` | Tjekker om venstre værdi er **større** end højre værdi. | `10 > 5` | `true` |
| `<=` | Tjekker om venstre værdi er **mindre eller lig** med højre værdi. | `5 <= 5` | `true` |
| `>=` | Tjekker om venstre værdi er **større eller lig** med højre værdi. | `10 >= 5` | `true` |

Arithmetic operators:

| **Operator** | **Forklaring** | **Eksempel** | **Resultat** |
| --- | --- | --- | --- |
| `+` | Addition (lægger to værdier sammen) | `5 + 3` | `8` |
| `-` | Subtraktion (trækker værdier fra) | `5 - 3` | `2` |
| `*` | Multiplikation | `5 * 3` | `15` |
| `*` | Multiplikation | `5 * 3` | `15` |
| `/` | Division | `5 / 3` | `1.666...` |
| `%` | Modulus (resten af division) | `5 % 3` | `2` |
| `**` | Eksponentiering (potens) | `5 ** 3` | `125` |
| `++` | Inkrementering (plus 1) | `let a = 5; a++` | Før: `5`, Efter: `6` |
| `--` | Dekrementering (minus 1) | `let a = 5; a--` | Før: `5`, Efter: `4` |

Assignment operators:

| **Operator** | **Forklaring** | **Eksempel** | **Resultat** |
| --- | --- | --- | --- |
| `=` | Tildeler værdien `5` til `x` | `x = 5` | `x = 5` |
| `+=` | Lægger 5 til `x` og tildeler resultatet | `x += 5` | `x = x + 5` |
| `-=` | Trækker 5 fra `x` og tildeler resultatet | `x -= 5` | `x = x - 5` |
| `*=` | Ganger `x` med 5 og tildeler resultatet | `x *= 5` | `x = x * 5` |
| `/=` | Dividerer `x` med 5 og tildeler resultatet | `x /= 5` | `x = x / 5` |
| `%=` | Tildeler resten af `x` divideret med 5 | `x %= 5` | `x = x % 5` |
| `**=` | Tildeler `x` opløftet i anden potens | `x **= 2` | `x = x ** 2` |

Logical operators

| **Operator** | **Forklaring** | **Eksempel** | **Resultat** |
| --- | --- | --- | --- |
| `&&` | Og: Sandt, hvis begge sider er sande | `true && false` | `false` |
| `||`| Eller: Sandt, hvis en af siderne er sande | `true || false` | `true` |
| `!` | Ikke: Inverterer en værdi | `!true` | `false` |