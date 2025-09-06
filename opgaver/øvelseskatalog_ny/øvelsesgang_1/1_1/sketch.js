// Defining variables for the user interface
let labelActivity1, labelActivity1Minutes, textActivity1, textActivity1Minutes;
let labelActivity2, labelActivity2Minutes, textActivity2, textActivity2Minutes;
let labelActivity3, labelActivity3Minutes, textActivity3, textActivity3Minutes;
let labelActivity4, labelActivity4Minutes, textActivity4, textActivity4Minutes;
let labelActivity5, labelActivity5Minutes, textActivity5, textActivity5Minutes;
let labelTotalMinutes, textTotalMinutes, buttonCalculateMinutes;

function setup() {
  noCanvas();
  
  // Setting up labels and input fields for each activity
  labelActivity1 = createSpan('Activity 1');
  labelActivity1.position(10, 30);
  textActivity1 = createInput();
  textActivity1.position(100, 30);

  labelActivity1Minutes = createSpan('Minutes 1');
  labelActivity1Minutes.position(300, 30);
  textActivity1Minutes = createInput();
  textActivity1Minutes.position(390, 30);

  labelActivity2 = createSpan('Activity 2');
  labelActivity2.position(10, 60);
  textActivity2 = createInput();
  textActivity2.position(100, 60);

  labelActivity2Minutes = createSpan('Minutes 2');
  labelActivity2Minutes.position(300, 60);
  textActivity2Minutes = createInput();
  textActivity2Minutes.position(390, 60);

  labelActivity3 = createSpan('Activity 3');
  labelActivity3.position(10, 90);
  textActivity3 = createInput();
  textActivity3.position(100, 90);

  labelActivity3Minutes = createSpan('Minutes 3');
  labelActivity3Minutes.position(300, 90);
  textActivity3Minutes = createInput();
  textActivity3Minutes.position(390, 90);

  labelActivity4 = createSpan('Activity 4');
  labelActivity4.position(10, 120);
  textActivity4 = createInput();
  textActivity4.position(100, 120);

  labelActivity4Minutes = createSpan('Minutes 4');
  labelActivity4Minutes.position(300, 120);
  textActivity4Minutes = createInput();
  textActivity4Minutes.position(390, 120);

  labelActivity5 = createSpan('Activity 5');
  labelActivity5.position(10, 150);
  textActivity5 = createInput();
  textActivity5.position(100, 150);

  labelActivity5Minutes = createSpan('Minutes 5');
  labelActivity5Minutes.position(300, 150);
  textActivity5Minutes = createInput();
  textActivity5Minutes.position(390, 150);

  buttonCalculateMinutes = createButton('Calculate Total Minutes');
  buttonCalculateMinutes.position(10, 180);

  labelTotalMinutes = createSpan('Total Minutes');
  labelTotalMinutes.position(300, 180);
  textTotalMinutes = createInput();
  textTotalMinutes.position(390, 180);

  // Attach empty function for calculation
  buttonCalculateMinutes.mousePressed(CalculateTotalMinutes);
}

function CalculateTotalMinutes() {
  // Place the code for calculating the total time here
  // Definer variable der læser brugerinput
  let minutes1 = parseFloat(textActivity1Minutes.value());
  let minutes2 = parseFloat(textActivity2Minutes.value());
  let minutes3 = parseFloat(textActivity3Minutes.value());
  let minutes4 = parseFloat(textActivity4Minutes.value());
  let minutes5 = parseFloat(textActivity5Minutes.value());
  let totalMinutes;

  // Beregn samlede antal minutter
  totalMinutes = minutes1 + minutes2 + minutes3 + minutes4 + minutes5;

  // Vis beregnede resultat 
  textTotalMinutes.value(totalMinutes);
}
