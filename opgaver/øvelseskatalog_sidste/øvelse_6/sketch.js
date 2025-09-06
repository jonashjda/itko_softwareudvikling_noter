// Variabler for brugerfladen
let labelDato, textDato;
let labelAktivitet, textAktivitet;
let labelVarighed, textVarighed;
let knapTilføj, knapÆndre, knapSlet, knapNæste, knapForrige, knapBeregn;

let labelTotalRestitution, textTotalRestitution;
let labelTotalCykling, textTotalCykling;
let labelTotalLøb, textTotalLøb;
let labelTotalStyrketræning, textTotalStyrketræning;

// Array til træningslog og aktuel indeks
let træningslog = [];
let aktuelIndex = -1;


function setup() {
  
  // Inputfelter
  labelDato = createSpan("Dato:");
  labelDato.position(10, 30);
  textDato = createInput();
  textDato.position(150, 30);

  labelAktivitet = createSpan("Aktivitet:");
  labelAktivitet.position(10, 70);
  textAktivitet = createSelect();
  textAktivitet.position(150, 70);
  textAktivitet.option("Cykling");
  textAktivitet.option("Løb");
  textAktivitet.option("Styrketræning");
  textAktivitet.option("Restitution");

  labelVarighed = createSpan("Varighed (min):");
  labelVarighed.position(10, 110);
  textVarighed = createInput();
  textVarighed.position(150, 110);

  // Knapper
  knapTilføj = createButton("Tilføj");
  knapTilføj.position(10, 150);
  knapTilføj.mousePressed(tilføjSession);

  knapÆndre = createButton("Ændre");
  knapÆndre.position(80, 150);
  knapÆndre.mousePressed(ændreSession);

  knapSlet = createButton("Slet");
  knapSlet.position(150, 150);
  knapSlet.mousePressed(sletSession);

  knapNæste = createButton("Næste");
  knapNæste.position(220, 150);
  knapNæste.mousePressed(næsteSession);

  knapForrige = createButton("Forrige");
  knapForrige.position(290, 150);
  knapForrige.mousePressed(forrigeSession);

  knapBeregn = createButton("Beregn tid");
  knapBeregn.position(360, 150);
  knapBeregn.mousePressed(beregnTid);

  // Totalfelter
  labelTotalRestitution = createSpan("Total restitution:");
  labelTotalRestitution.position(10, 200);
  textTotalRestitution = createInput();
  textTotalRestitution.position(150, 200);

  labelTotalCykling = createSpan("Total cykling:");
  labelTotalCykling.position(10, 230);
  textTotalCykling = createInput();
  textTotalCykling.position(150, 230);

  labelTotalLøb = createSpan("Total løb:");
  labelTotalLøb.position(10, 260);
  textTotalLøb = createInput();
  textTotalLøb.position(150, 260);

  labelTotalStyrketræning = createSpan("Total styrketræning:");
  labelTotalStyrketræning.position(10, 290);
  textTotalStyrketræning = createInput();
  textTotalStyrketræning.position(150, 290);
}

// Funktion til at tilføje en ny træningssession
function tilføjSession() {

}

// Funktion til at ændre den aktuelle træningssession
function ændreSession() {

}

// Funktion til at slette den aktuelle træningssession
function sletSession() {

}

// Funktion til at navigere til den næste session
function næsteSession() {
    
}

// Funktion til at navigere til den forrige session
function forrigeSession() {

}

// Funktion til at vise den aktuelle session
function visSession() {

}

// Funktion til at beregne den samlede tid for hver aktivitet
function beregnTid() {

}
