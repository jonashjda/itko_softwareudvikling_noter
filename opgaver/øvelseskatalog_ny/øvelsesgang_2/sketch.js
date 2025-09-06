// Defining variables for the user interface
let textTotalHours, labelTotalHours;
let labelIntervalSession, textIntervalSession;
let labelLongEnduranceSession, textLongEnduranceSession;
let labelShortEnduranceSession1, textShortEnduranceSession1;
let labelShortEnduranceSession2, textShortEnduranceSession2;
let buttonCalculateSessions;

function setup() {
  noCanvas();
  
  // Input for total weekly training hours
  labelTotalHours = createSpan('Total Weekly Hours');
  labelTotalHours.position(10, 30);
  textTotalHours = createInput();
  textTotalHours.position(240, 30);

  // Display for interval session hours
  labelIntervalSession = createSpan('Interval Session Hours');
  labelIntervalSession.position(10, 60);
  textIntervalSession = createInput();
  textIntervalSession.position(240, 60);

  // Display for long endurance session hours
  labelLongEnduranceSession = createSpan('Long Endurance Session Hours');
  labelLongEnduranceSession.position(10, 90);
  textLongEnduranceSession = createInput();
  textLongEnduranceSession.position(240, 90);

  // Display for first short endurance session hours
  labelShortEnduranceSession1 = createSpan('Short Endurance Session 1 Hours');
  labelShortEnduranceSession1.position(10, 120);
  textShortEnduranceSession1 = createInput();
  textShortEnduranceSession1.position(240, 120);

  // Display for second short endurance session hours
  labelShortEnduranceSession2 = createSpan('Short Endurance Session 2 Hours');
  labelShortEnduranceSession2.position(10, 150);
  textShortEnduranceSession2 = createInput();
  textShortEnduranceSession2.position(240, 150);

  // Button to trigger calculation
  buttonCalculateSessions = createButton('Calculate Session Hours');
  buttonCalculateSessions.position(10, 180);

  // Attach empty function for calculation
  buttonCalculateSessions.mousePressed(CalculateSessionHours);
}

function CalculateSessionHours() {
    // Students can insert the code for calculating session hours here
    // Definer variable
    let totalHours;
    let intervalSessionHours;
    let enduranceLongHours;
    let enduranceShortHours;
    
    // Læs brugerinput
    totalHours = textTotalHours.value();

    // Beregninger af de tre typer sessioner
    intervalSessionHours = totalHours * 0.15;
    enduranceLongHours = totalHours * 0.35;
    enduranceShortHours = totalHours * 0.25;

    // Vis resultater i tekstfelter
    textIntervalSession.value(intervalSessionHours);
    textLongEnduranceSession.value(enduranceLongHours);
    textShortEnduranceSession1.value(enduranceShortHours);
    textShortEnduranceSession2.value(enduranceShortHours);
}
