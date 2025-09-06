// Variabler for brugergrænsefladen
let labelAlder;
let textAlder;
let knapBeregn;

let labelMakspuls;
let textMakspuls;
let labelTraeningsZoner;
let textTraeningsZoner;

function setup() {
  // Skærmbilledet sættes op

  // Inputfelt for alder
  labelAlder = createSpan('Indtast din alder:');
  labelAlder.position(10, 30);
  textAlder = createInput();
  textAlder.position(150, 30);

  // Knap til at beregne makspuls og træningszoner
  knapBeregn = createButton('Beregn makspuls og træningszoner');
  knapBeregn.position(10, 70);

  // Outputfelt for makspuls
  labelMakspuls = createSpan('Makspuls:');
  labelMakspuls.position(10, 120);
  textMakspuls = createInput();
  textMakspuls.position(150, 120);

  // Outputfelt for træningszoner
  labelTraeningsZoner = createSpan('Træningszoner:');
  labelTraeningsZoner.position(10, 160);

  textTraeningsZone1 = createInput();
  textTraeningsZone1.position(150, 160);
  textTraeningsZone1.size(500, 15)

  textTraeningsZone2 = createInput();
  textTraeningsZone2.position(150, 200);
  textTraeningsZone2.size(500, 15)

  textTraeningsZone3 = createInput();
  textTraeningsZone3.position(150, 240);
  textTraeningsZone3.size(500, 15)

  textTraeningsZone4 = createInput();
  textTraeningsZone4.position(150, 280);
  textTraeningsZone4.size(500, 15)

  // Tilknyt funktion til knappen
  knapBeregn.mousePressed(beregnMakspulsOgTraeningsZoner);
}

// Funktion til at beregne makspuls
function beregnMakspuls(alder){
    let makspuls;
    makspuls = 220 - alder;
    return makspuls;
}

// Funktion til at beregne træningszoner
function bestemTræningsZoner(makspuls){
    let træningszoner = [];
    let zone1 = `Zone 1 50%-60% af makspuls: ${makspuls*0.5} - ${makspuls*0.6} slag`;
    let zone2 = `Zone 2 60%-70% af makspuls: ${makspuls*0.6} - ${makspuls*0.7} slag`;
    let zone3 = `Zone 3 70%-80% af makspuls: ${makspuls*0.7} - ${makspuls*0.8} slag`;
    let zone4 = `Zone 4 80%-90% af makspuls: ${makspuls*0.8} - ${makspuls*0.9} slag`;

    træningszoner[0] = zone1;
    træningszoner[1] = zone2;
    træningszoner[2] = zone3;
    træningszoner[3] = zone4;

    return træningszoner;
}

// Hovedfunktionen
function beregnMakspulsOgTraeningsZoner() {
    // Læs brugerinput
    let alderInput = parseFloat(textAlder.value());
    let beregnetMaksPuls = beregnMakspuls(alderInput);
    let bestemteTræningsZoner = bestemTræningsZoner(beregnetMaksPuls);

    textMakspuls.value(beregnetMaksPuls);
    textTraeningsZone1.value(bestemteTræningsZoner[0]);
    textTraeningsZone2.value(bestemteTræningsZoner[1]);
    textTraeningsZone3.value(bestemteTræningsZoner[2]);
    textTraeningsZone4.value(bestemteTræningsZoner[3]);
}