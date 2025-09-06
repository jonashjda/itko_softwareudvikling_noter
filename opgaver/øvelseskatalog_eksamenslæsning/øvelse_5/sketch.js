// Variabler for brugergrænsefladen
let labelUgeNummer, textUgeNummer;
let labelMandag, textMandag;
let labelTirsdag, textTirsdag;
let labelOnsdag, textOnsdag;
let labelTorsdag, textTorsdag;
let labelFredag, textFredag;
let labelLørdag, textLørdag;
let labelSøndag, textSøndag;
let knapNyUge, knapGem, knapSlet, knapNæsteUge, knapForrigeUge;

// Array til at gemme kostPlaner
let kostPlaner = [];
let aktuelUgeIndex = -1;

// Klasse for ugeplan med get og set properties
class Ugeplan {
  constructor(ugeNummer, mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag) {
    this._ugeNummer = ugeNummer;
    this._mandag = mandag;
    this._tirsdag = tirsdag;
    this._onsdag = onsdag;
    this._torsdag = torsdag;
    this._fredag = fredag;
    this._lørdag = lørdag;
    this._søndag = søndag;
  }

  get ugeNummer() {
    return this._ugeNummer;
  }

  set ugeNummer(value) {
    if (value > 0) {
      this._ugeNummer = value;
    } else {
      throw new Error("Ugenummer skal være et positivt tal.");
    }
  }

  get mandag() {
    return this._mandag;
  }

  set mandag(value) {
    this._mandag = value;
  }

  get tirsdag() {
    return this._tirsdag;
  }

  set tirsdag(value) {
    this._tirsdag = value;
  }

  get onsdag() {
    return this._onsdag;
  }

  set onsdag(value) {
    this._onsdag = value;
  }

  get torsdag() {
    return this._torsdag;
  }

  set torsdag(value) {
    this._torsdag = value;
  }

  get fredag() {
    return this._fredag;
  }

  set fredag(value) {
    this._fredag = value;
  }

  get lørdag() {
    return this._lørdag;
  }

  set lørdag(value) {
    this._lørdag = value;
  }

  get søndag() {
    return this._søndag;
  }

  set søndag(value) {
    this._søndag = value;
  }
}

function setup() {
  // Skærmbilledet sættes op

  // Inputfelt for uge nummer
  labelUgeNummer = createSpan('Uge nummer:');
  labelUgeNummer.position(10, 30);
  textUgeNummer = createInput();
  textUgeNummer.position(120, 30);

  // Inputfelter for de enkelte ugedage
  labelMandag = createSpan('Mandag:');
  labelMandag.position(10, 70);
  textMandag = createInput();
  textMandag.position(120, 70);

  labelTirsdag = createSpan('Tirsdag:');
  labelTirsdag.position(10, 100);
  textTirsdag = createInput();
  textTirsdag.position(120, 100);

  labelOnsdag = createSpan('Onsdag:');
  labelOnsdag.position(10, 130);
  textOnsdag = createInput();
  textOnsdag.position(120, 130);

  labelTorsdag = createSpan('Torsdag:');
  labelTorsdag.position(10, 160);
  textTorsdag = createInput();
  textTorsdag.position(120, 160);

  labelFredag = createSpan('Fredag:');
  labelFredag.position(10, 190);
  textFredag = createInput();
  textFredag.position(120, 190);

  labelLørdag = createSpan('Lørdag:');
  labelLørdag.position(10, 220);
  textLørdag = createInput();
  textLørdag.position(120, 220);

  labelSøndag = createSpan('Søndag:');
  labelSøndag.position(10, 250);
  textSøndag = createInput();
  textSøndag.position(120, 250);

  // Knapper
  knapNyUge = createButton('Ny ugeplan');
  knapNyUge.position(10, 300);
  knapNyUge.mousePressed(nyUgeplan);

  knapGem = createButton('Gem ugeplan');
  knapGem.position(120, 300);
  knapGem.mousePressed(gemEksisterendeUgeplan);

  knapSlet = createButton('Slet ugeplan');
  knapSlet.position(220, 300);
  knapSlet.mousePressed(sletUgeplan);

  knapNæsteUge = createButton('Næste uge');
  knapNæsteUge.position(10, 350);
  knapNæsteUge.mousePressed(næsteUge);

  knapForrigeUge = createButton('Forrige uge');
  knapForrigeUge.position(120, 350);
  knapForrigeUge.mousePressed(forrigeUge);
}

// Funktion til at gemme en ny ugeplan
function nyUgeplan() {
  // Læs brugerinput
  let ugeNr = String(textUgeNummer.value());
  let mandag = String(textMandag.value());
  let tirsdag = String(textTirsdag.value());
  let onsdag = String(textOnsdag.value());
  let torsdag = String(textTorsdag.value());
  let fredag = String(textFredag.value());
  let lørdag = String(textLørdag.value());
  let søndag = String(textSøndag.value());

  let ugeplan = new Ugeplan(ugeNr, mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag);
  kostPlaner.splice(aktuelUgeIndex + 1, 0, ugeplan);
  console.log(kostPlaner);
  aktuelUgeIndex += 1;
  console.log(aktuelUgeIndex);
}

// Funktion til at gemme en eksisterende ugeplan
function gemEksisterendeUgeplan() {
  let mandagNy = String(textMandag.value());
  let tirsdagNy = String(textTirsdag.value());
  let onsdagNy = String(textOnsdag.value());
  let torsdagNy = String(textTorsdag.value());
  let fredagNy = String(textFredag.value());
  let lørdagNy = String(textLørdag.value());
  let søndagNy = String(textSøndag.value());
  
  kostPlaner[aktuelUgeIndex].mandag = mandagNy;
  kostPlaner[aktuelUgeIndex].tirsdag = tirsdagNy;
  kostPlaner[aktuelUgeIndex].onsdag = onsdagNy;
  kostPlaner[aktuelUgeIndex].torsdag = torsdagNy;
  kostPlaner[aktuelUgeIndex].fredag = fredagNy;
  kostPlaner[aktuelUgeIndex].lørdag = lørdagNy;
  kostPlaner[aktuelUgeIndex].søndag = søndagNy;

  console.log(kostPlaner);
}

// Funktion til at slette den aktuelt viste ugeplan
function sletUgeplan() {
  kostPlaner.splice(aktuelUgeIndex, 1);
    console.log(kostPlaner);
    if (kostPlaner.length == 0){
      textUgeNummer.value("");
      textMandag.value("");
      textTirsdag.value("");
      textOnsdag.value("");
      textTorsdag.value("");
      textFredag.value("");
      textLørdag.value("");
      textSøndag.value("")
      aktuelUgeIndex -= 1;
    } else if (aktuelUgeIndex == kostPlaner.length){
      forrigeUge();
    } else if (aktuelUgeIndex > -1){
      aktuelUgeIndex -= 1;
      næsteUge();
    } 
}

// Funktion til at vise den aktuelle ugeplan
function visUgeplan(index) {
  textUgeNummer.value(kostPlaner[index].ugeNummer);
  textMandag.value(kostPlaner[index].mandag);
  textTirsdag.value(kostPlaner[index].tirsdag);
  textOnsdag.value(kostPlaner[index].onsdag);
  textTorsdag.value(kostPlaner[index].torsdag);
  textFredag.value(kostPlaner[index].fredag);
  textLørdag.value(kostPlaner[index].lørdag);
  textSøndag.value(kostPlaner[index].søndag); 
}

// Funktion til at navigere til næste uge
function næsteUge() {
  if (kostPlaner.length == 0){
    alert("Din ugeliste er tom!");
  } else{
    aktuelUgeIndex += 1;
    if (aktuelUgeIndex == kostPlaner.length){
        alert("Ikke flere næste uger!");
        aktuelUgeIndex -= 1;
    } else{
      console.log(aktuelUgeIndex);
      visUgeplan(aktuelUgeIndex);
    }
  }
}

// Funktion til at navigere til forrige uge
function forrigeUge() {
  if (kostPlaner.length == 0){
    alert("Din ugeliste er tom!");
  } else{
    if (aktuelUgeIndex < 1){
      alert("Ikke nogen forrige uge!");
    } else {
      aktuelUgeIndex -= 1;
      console.log(aktuelUgeIndex);
      visUgeplan(aktuelUgeIndex);
    }
  }
}
