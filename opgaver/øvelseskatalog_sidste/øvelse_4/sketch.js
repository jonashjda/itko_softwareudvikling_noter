// Variabler for brugergrænsefladen
let labelVægt, labelVarighed, labelAktivitetsniveau;
let textVægt, textVarighed, dropdownAktivitetsniveau;
let knapBeregn;

let labelKalorier, labelFeedback;
let textKalorier, textFeedback;

function setup() {

  // Input for vægt
  labelVægt = createSpan('Vægt (kg):');
  labelVægt.position(10, 30);
  textVægt = createInput();
  textVægt.position(150, 30);

  // Input for varighed
  labelVarighed = createSpan('Varighed (minutter):');
  labelVarighed.position(10, 70);
  textVarighed = createInput();
  textVarighed.position(150, 70);

  // Dropdown-menu for aktivitetsniveau
  labelAktivitetsniveau = createSpan('Aktivitetsniveau:');
  labelAktivitetsniveau.position(10, 110);
  dropdownAktivitetsniveau = createSelect();
  dropdownAktivitetsniveau.position(150, 110);
  dropdownAktivitetsniveau.option('Lav');
  dropdownAktivitetsniveau.option('Moderat');
  dropdownAktivitetsniveau.option('Høj');

  // Knap til at beregne kalorier og feedback
  knapBeregn = createButton('Beregn kalorier og feedback');
  knapBeregn.position(10, 150);

  // Output for kalorier
  labelKalorier = createSpan('Forbrændte kalorier:');
  labelKalorier.position(10, 200);
  textKalorier = createInput();
  textKalorier.position(150, 200);

  // Output for feedback
  labelFeedback = createSpan('Feedback:');
  labelFeedback.position(10, 240);
  textFeedback = createInput();
  textFeedback.position(150, 240);

  // Tilknyt funktion til knappen
  knapBeregn.mousePressed(beregnOgVisKalorier);
}

// Funktion til at beregne kalorier
function beregnKalorier(vægt, varighed, niveau){
    let kalorier;
    if (niveau === 'Lav'){
        kalorier = vægt * varighed * 0.05
    } else if (niveau === 'Moderat'){
        kalorier = vægt * varighed * 0.1
    } else if (niveau === 'Høj'){
        kalorier = vægt * varighed * 0.15
    }

    return kalorier;
}

// Funktion til at bestemme feedback
function bestemFeedback(kalorier){
    let feedbackTekst;

    if (kalorier < 150){
        feedbackTekst = "Din aktivitet er lav. Overvej at træne længere eller øge intensiteten.";
    } else if (kalorier >= 150 && kalorier < 300){
        feedbackTekst = "En god start! Overvej at sigte efter mindst 300 kalorier for en sund aktivitetsrutine.";
    } else if (kalorier >= 300 && kalorier < 500){
        feedbackTekst = "Godt arbejde! Du er i et sundt aktivitetsinterval.";
    } else if (kalorier >= 500 && kalorier < 700){
        feedbackTekst = "Fantastisk indsats! Du forbrænder en betydelig mængde kalorier.";
    } else {
        feedbackTekst = "Utroligt arbejde! Sørg for at drikke rigeligt med vand og restituere ordentligt.";
    }

    return feedbackTekst;
}

// Hovedfunktion
function beregnOgVisKalorier() {
    // Læs brugerinput
    let vægtInput = textVægt.value();
    let varighedInput = textVarighed.value();
    let niveauInput = dropdownAktivitetsniveau.value();

    // Definer variable baseret på de to andre funktioner
    let kalorierBeregning = beregnKalorier(vægtInput, varighedInput, niveauInput);
    let feedback = bestemFeedback(kalorierBeregning);

    textKalorier.value(kalorierBeregning);
    textFeedback.value(feedback);

}