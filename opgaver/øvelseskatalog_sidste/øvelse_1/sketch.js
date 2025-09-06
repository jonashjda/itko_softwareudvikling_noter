// Variabler for brugergrænsefladen
let labelVejrtype;
let labelTemperatur;
let textVejrtype;
let textTemperatur;

let knapVisVejr;
let labelBesked;
let textBesked;

function setup() {

  // Input for vejrtype
  labelVejrtype = createSpan('Vejrtype (sol, regn, sne, skyet):');
  labelVejrtype.position(10, 30);
  textVejrtype = createInput();
  textVejrtype.position(220, 30);

  // Input for temperatur
  labelTemperatur = createSpan('Temperatur (i grader Celsius):');
  labelTemperatur.position(10, 70);
  textTemperatur = createInput();
  textTemperatur.position(220, 70);

  // Knap til at vise vejret
  knapVisVejr = createButton('Vis vejr');
  knapVisVejr.position(10, 120);

  // Output for vejrmelding
  labelBesked = createSpan('Vejrmelding:');
  labelBesked.position(10, 180);
  textBesked = createInput();
  textBesked.position(120, 180);

  // Output for aktivitetsforslag
  labelAktivitet = createSpan('Aktivitet:');
  labelAktivitet.position(10, 220);
  textAktivitet = createInput();
  textAktivitet.position(120, 220);

  // Tilknyt funktion til knappen
  knapVisVejr.mousePressed(VisVejrmelding);
}

function VisVejrmelding() {
  // Læs input fra brugergrænsefladen
    let vejrtype = String(textVejrtype.value()).toLowerCase();
    let temperatur = parseFloat(textTemperatur.value());
    let vejrBesked;
    let aktivitetsForslag;

    if (vejrtype === "sol"){
        if (temperatur < 0){
            vejrBesked = "Det er solrigt, men koldt. Tag varmt tøj på!";
        } else if (temperatur >= 0 && temperatur <= 10){
            vejrBesked = "Det er solrigt, men køligt. Overvej en jakke.";
        } else if (temperatur > 10){
            vejrBesked = "Det er varmt og solrigt. Husk solcreme!";
        } else {
            alert("Missing temperature input!");
        }
    } else if (vejrtype === "regn") {
        if (temperatur < 5){
            vejrBesked = "Det regner, og det er meget koldt. Tag både paraply og varmt tøj.";
        } else if (temperatur >= 5 && temperatur <= 15){
            vejrBesked = "Det regner. Husk paraply og en regnjakke.";
        } else if (temperatur > 15){
            vejrBesked = "Det regner, men det er lunt. Paraplyen er nok.";
        } else {
            alert("Missing temperature input!");
        }
    } else if (vejrtype === "sne") {
        if (temperatur < -5){
            vejrBesked = "Det sner kraftigt. Klæd dig varmt på og vær forsigtig!";
        } else if (temperatur >= -5) {
            vejrBesked = "Det sner. Perfekt til en sneboldkamp!";
        } else {
            alert("Missing temperature input!");
        }
    } else if (vejrtype === "skyet") {
        if (temperatur < -5){
            vejrBesked = "Det er skyet og koldt. Tag en varm trøje på.";
        } else if (temperatur >= -5) {
            vejrBesked = "Det er skyet, men ikke så koldt. En let jakke er nok.";
        } else {
            alert("Missing temperature input!");
        }
    } else {
        alert("Ukendt vejrtype!");
    }

  switch(vejrtype){
    case "sol":
        aktivitetsForslag = "Tag ud og løb en tur.";
        break;
    case "regn":
        aktivitetsForslag = "Træn indenfor eller læs en bog.";
        break;
    case "sne":
        aktivitetsForslag = "Prøv en tur på ski.";
        break;
    case "skyet":
        aktivitetsForslag = "En gåtur er perfekt i dette vejr.";
        break;
    default:
        alert("Error");
  }

  textAktivitet.value(aktivitetsForslag);
  textBesked.value(vejrBesked);
  }
