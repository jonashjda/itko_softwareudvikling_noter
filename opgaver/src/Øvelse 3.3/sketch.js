// Defining variables for the user interface
let labelRisk1;
let labelRisk1Likelyhood;
let labelRisk1Severity;
let labelRisk1Score;
let textRisk1;
let textRisk1Likelyhood;
let textRisk1Severity;
let textRisk1Score;

let labelRisk2;
let labelRisk2Likelyhood;
let labelRisk2Severity;
let labelRisk2Score;
let textRisk2;
let textRisk2Likelyhood;
let textRisk2Severity;
let textRisk2Score;

let labelRisk3;
let labelRisk3Likelyhood;
let labelRisk3Severity;
let labelRisk3Score;
let textRisk3;
let textRisk3Likelyhood;
let textRisk3Severity;
let textRisk3Score;

let labelRisk4;
let labelRisk4Likelyhood;
let labelRisk4Severity;
let labelRisk4Score;
let textRisk4;
let textRisk4Likelyhood;
let textRisk4Severity;
let textRisk4Score;

let labelRisk5;
let labelRisk5Likelyhood;
let labelRisk5Severity;
let labelRisk5Score;
let textRisk5;
let textRisk5Likelyhood;
let textRisk5Severity;
let textRisk5Score;

let labelTotalRiskScore;
let textTotalRiskScore;

let labelCost;
let textCost;

let labelBenefits;
let textBenefits;

let labelImportance;
let textImportence;

let buttonCalculateRiskScores;

function setup() {
  // Remove the default canvas
  noCanvas();

  // Risk 1
  labelRisk1 = createSpan('Risk 1');
  labelRisk1.position(10, 30);
  textRisk1 = createInput();
  textRisk1.position(100, 30);

  labelRisk1Likelihood = createSpan('Likelihood 1');
  labelRisk1Likelihood.position(300, 30);
  textRisk1Likelihood = createInput();
  textRisk1Likelihood.position(390, 30);

  labelRisk1Severity = createSpan('Severity 1');
  labelRisk1Severity.position(600, 30);
  textRisk1Severity = createInput();
  textRisk1Severity.position(690, 30);

  labelRisk1Score = createSpan('Score 1');
  labelRisk1Score.position(900, 30);
  textRisk1Score = createInput();
  textRisk1Score.position(990, 30);
  textRisk1Score.attribute('disabled', '');

  // Risk 2
  labelRisk2 = createSpan('Risk 2');
  labelRisk2.position(10, 60);
  textRisk2 = createInput();
  textRisk2.position(100, 60);

  labelRisk2Likelihood = createSpan('Likelihood 2');
  labelRisk2Likelihood.position(300, 60);
  textRisk2Likelihood = createInput();
  textRisk2Likelihood.position(390, 60);

  labelRisk2Severity = createSpan('Severity 2');
  labelRisk2Severity.position(600, 60);
  textRisk2Severity = createInput();
  textRisk2Severity.position(690, 60);

  labelRisk2Score = createSpan('Score 2');
  labelRisk2Score.position(900, 60);
  textRisk2Score = createInput();
  textRisk2Score.position(990, 60);
  textRisk2Score.attribute('disabled', '');

  // Risk 3
  labelRisk3 = createSpan('Risk 3');
  labelRisk3.position(10, 90);
  textRisk3 = createInput();
  textRisk3.position(100, 90);

  labelRisk3Likelihood = createSpan('Likelihood 3');
  labelRisk3Likelihood.position(300, 90);
  textRisk3Likelihood = createInput();
  textRisk3Likelihood.position(390, 90);

  labelRisk3Severity = createSpan('Severity 3');
  labelRisk3Severity.position(600, 90);
  textRisk3Severity = createInput();
  textRisk3Severity.position(690, 90);

  labelRisk3Score = createSpan('Score 3');
  labelRisk3Score.position(900, 90);
  textRisk3Score = createInput();
  textRisk3Score.position(990, 90);
  textRisk3Score.attribute('disabled', '');

  // Risk 4
  labelRisk4 = createSpan('Risk 4');
  labelRisk4.position(10, 120);
  textRisk4 = createInput();
  textRisk4.position(100, 120);

  labelRisk4Likelihood = createSpan('Likelihood 4');
  labelRisk4Likelihood.position(300, 120);
  textRisk4Likelihood = createInput();
  textRisk4Likelihood.position(390, 120);

  labelRisk4Severity = createSpan('Severity 4');
  labelRisk4Severity.position(600, 120);
  textRisk4Severity = createInput();
  textRisk4Severity.position(690, 120);

  labelRisk4Score = createSpan('Score 4');
  labelRisk4Score.position(900, 120);
  textRisk4Score = createInput();
  textRisk4Score.position(990, 120);
  textRisk4Score.attribute('disabled', '');

  // Risk 5
  labelRisk5 = createSpan('Risk 5');
  labelRisk5.position(10, 150);
  textRisk5 = createInput();
  textRisk5.position(100, 150);

  labelRisk5Likelihood = createSpan('Likelihood 5');
  labelRisk5Likelihood.position(300, 150);
  textRisk5Likelihood = createInput();
  textRisk5Likelihood.position(390, 150);

  labelRisk5Severity = createSpan('Severity 5');
  labelRisk5Severity.position(600, 150);
  textRisk5Severity = createInput();
  textRisk5Severity.position(690, 150);

  labelRisk5Score = createSpan('Score 5');
  labelRisk5Score.position(900, 150);
  textRisk5Score = createInput();
  textRisk5Score.position(990, 150);
  textRisk5Score.attribute('disabled', '');

  // Cost
  labelCost = createSpan('Cost');
  labelCost.position(10, 180);
  textCost = createInput();
  textCost.position(100, 180);

  // Benefits
  labelBenefits = createSpan('Benefits');
  labelBenefits.position(10, 210);
  textBenefits = createInput();
  textBenefits.position(100, 210);

  // Importence
  labelImportence = createSpan('Importence');
  labelImportence.position(10, 240);
  textImportence = createInput();
  textImportence.position(100, 240);

  // Total Risk Score
  labelTotalRiskScore = createSpan('Total Risk Score');
  labelTotalRiskScore.position(10, 270);
  textTotalRiskScore = createInput();
  textTotalRiskScore.position(120, 270);
  textTotalRiskScore.attribute('disabled', '');

  // Calculate Button
  buttonCalculateRiskScores = createButton('Calculate Risk Scores');
  buttonCalculateRiskScores.position(10, 300);
  
  // Tells that the calculateRiskScores function should run when the button is pressed
  buttonCalculateRiskScores.mousePressed(calculateRiskScores);
}

function calculateIndividualRiskScore(textRisk, textSeverity, riskNum)
{
  //Definer variable
  let riskLikelyhood;
  let riskSeverity;
  let riskScore;
  
  //Indlæs brugerinput
  riskLikelyhood = parseInt(textRisk.value());
  riskSeverity = parseInt(textSeverity.value());
  
  //Vis fejl ved forkert brugerinput
  if (riskLikelyhood < 1 || riskLikelyhood > 3){
  alert(`Likelihood ${riskNum} is outside alllowed range`);
  }
  
  if (riskSeverity < 1 || riskSeverity > 3){
  alert(`Severity ${riskNum} is outside alllowed range`);
  }
  
  //Beregn og return risk score
  riskScore = riskLikelyhood * riskSeverity;
  return riskScore
}

function calculateRiskScores() 
{
  //Definer variable og assign dem baseret funktionen til at beregne risk score for hver situation
  let risk1Score = calculateIndividualRiskScore(textRisk1Likelihood, textRisk1Severity, "1");
  let risk2Score = calculateIndividualRiskScore(textRisk2Likelihood, textRisk2Severity, "2");
  let risk3Score = calculateIndividualRiskScore(textRisk3Likelihood, textRisk3Severity, "3");
  let risk4Score = calculateIndividualRiskScore(textRisk4Likelihood, textRisk4Severity, "4");
  let risk5Score = calculateIndividualRiskScore(textRisk5Likelihood, textRisk5Severity, "5");
  
  let totalRisk;
  
  let cost;
  let benefits;
  let costDif;
  let importance;
  
  //Vis alle de invidiuelle risk scores
  textRisk1Score.value(risk1Score);
  textRisk2Score.value(risk2Score);
  textRisk3Score.value(risk3Score);
  textRisk4Score.value(risk4Score);
  textRisk5Score.value(risk5Score);
  
  //Beregn og vis samlet risk score
  totalRisk = risk1Score + risk2Score + risk3Score + risk4Score + risk5Score;
  textTotalRiskScore.value(totalRisk);
  
  //Indlæs brugerinput for cost, benefits og importance
  cost = parseFloat(textCost.value());
  benefits = parseFloat(textBenefits.value());
  importance = parseInt(textImportence.value());
  
  //Beregn difference mellem cost og benefits
  costDif = benefits - cost;
  
  //Evaluer projekt baseret på reglerne
  switch (importance){
      
    case 1:
      if (totalRisk < 15){
        if (costDif > 200000){
          alert("Project approved");
        }
      }
      else {
        alert("Project cancelled")
      }
      
      if (totalRisk > 15 && totalRisk < 30){
        if (costDif > 500000){
          alert("Project approved");
        }
      }
      else {
        alert("Project cancelled")
      }
      
      if (totalRisk > 30){
        if (costDif > 1000000){
          alert("Project approved");
        }
      }
      else {
        alert("Project cancelled")
      }
   }
}

setup();