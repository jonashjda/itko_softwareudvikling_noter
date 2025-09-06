// Variabler for brugergrænsefladen
let labelTidspunkt;
let labelTemperatur;
let dropdownTidspunkt;
let textTemperatur;

let knapVisRåd;
let labelBesked;
let textBesked;

function setup() {
    // Skærmbilledet sættes op

    // Dropdown-menu for tidspunkt
    labelTidspunkt = createSpan('Tidspunkt (Morgen, Eftermiddag, Aften):');
    labelTidspunkt.position(10, 30);
    dropdownTidspunkt = createSelect();
    dropdownTidspunkt.position(300, 30);
    dropdownTidspunkt.option('Morgen');
    dropdownTidspunkt.option('Eftermiddag');
    dropdownTidspunkt.option('Aften');

    // Input for temperatur
    labelTemperatur = createSpan('Temperatur (i grader Celsius):');
    labelTemperatur.position(10, 70);
    textTemperatur = createInput();
    textTemperatur.position(300, 70);

    // Knap til at vise træningsråd
    knapVisRåd = createButton('Vis træningsråd');
    knapVisRåd.position(10, 120);

    // Output for træningsråd
    labelBesked = createSpan('Træningsråd:');
    labelBesked.position(10, 180);
    textBesked = createInput();
    textBesked.position(120, 180);

    // Tilknyt funktion til knappen
    knapVisRåd.mousePressed(VisTræningsRåd);
}

function VisTræningsRåd() {
    // Læs brugerinput
    let tidspunkt = dropdownTidspunkt.value();
    let temperatur = parseFloat(textTemperatur.value());
    let træningsRåd;

    if (tidspunkt === "Morgen"){
        if (temperatur < 5){
            træningsRåd =  "Morgentræning er en god start, men det er meget koldt. Tag varmt tøj på.";
        } else if (temperatur >= 5 && temperatur <= 15){
            træningsRåd = "En frisk løbetur om morgenen passer godt til vejret.";
        } else if (temperatur > 15){
            træningsRåd = "Det er lunt fra morgenstunden. Perfekt til en udendørs aktivitet.";
        } else{
            alert("Invalid temperature input!!");
        }
    } else if (tidspunkt === "Eftermiddag"){
        if (temperatur < 10){
            træningsRåd = "Det er køligt om eftermiddagen. Overvej indendørstræning.";
        } else if (temperatur >= 10 && temperatur <= 20){
            træningsRåd = "Eftermiddagstræning er ideel med dette vejr. Tag en cykeltur.";
        } else if (temperatur > 20){
            træningsRåd = "Det er varmt. Sørg for at drikke rigeligt med vand under træning.";
        } else{
            alert("Invalid temperature input!!");
        }
    } else if (vejrtype === "Aften") {
        if (temperatur < 10){
            træningsRåd =  "Aftentræning kan være afslappende, men husk varmt tøj.";
        } else if (temperatur >= 10 && temperatur <= 20){
            træningsRåd = "En yoga- eller gåtur om aftenen passer perfekt.";
        } else if (temperatur > 20){
            træningsRåd = "Det er varmt selv om aftenen. Overvej en let aktivitet som yoga indendørs.";
        } else{
            alert("Invalid temperature input!!");
        }
    } else {
        alert("Ukendt vejrtype!");
    }

    // Law switch til at give træningsråd
    textBesked.value(træningsRåd);
}
