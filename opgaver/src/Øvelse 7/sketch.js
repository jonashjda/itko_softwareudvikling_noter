let buttonCalculateStats;
let totalErrorsInput, totalHoursInput, errorsPerHourInput, qaHoursInput, qaPercentageInput, acceptanceTestErrorsPerHourInput;

let errorInputAnalysis, errorInputDesign, errorInputProgramming, errorInputInternalTesting, errorInputAcceptanceTesting;
let hoursInputAnalysis, hoursInputDesign, hoursInputProgramming, hoursInputInternalTesting, hoursInputAcceptanceTesting;
let qaInputAnalysis, qaInputDesign, qaInputProgramming, qaInputInternalTesting, qaInputAcceptanceTesting;

let errorsPerHourAnalysisInput, errorsPerHourDesignInput, errorsPerHourProgrammingInput, errorsPerHourInternalTestingInput, errorsPerHourAcceptanceTestingInput;
let qaPercentageAnalysisInput, qaPercentageDesignInput, qaPercentageProgrammingInput, qaPercentageInternalTestingInput, qaPercentageAcceptanceTestingInput;

function setup() {
  createCanvas(1000, 1000);  // Increased width for more space

  // Error inputs for each phase
  createSpan("Errors in Analysis Phase: ").position(10, 10);
  errorInputAnalysis = createInput("").position(250, 10).size(100);

  createSpan("Errors in Design Phase: ").position(10, 40);
  errorInputDesign = createInput("").position(250, 40).size(100);

  createSpan("Errors in Programming Phase: ").position(10, 70);
  errorInputProgramming = createInput("").position(250, 70).size(100);

  createSpan("Errors in Internal Testing Phase: ").position(10, 100);
  errorInputInternalTesting = createInput("").position(250, 100).size(100);

  createSpan("Errors in Acceptance Testing Phase: ").position(10, 130);
  errorInputAcceptanceTesting = createInput("").position(250, 130).size(100);

  // Hours used in each phase
  createSpan("Hours in Analysis Phase: ").position(10, 160);
  hoursInputAnalysis = createInput("").position(250, 160).size(100);

  createSpan("Hours in Design Phase: ").position(10, 190);
  hoursInputDesign = createInput("").position(250, 190).size(100);

  createSpan("Hours in Programming Phase: ").position(10, 220);
  hoursInputProgramming = createInput("").position(250, 220).size(100);

  createSpan("Hours in Internal Testing Phase: ").position(10, 250);
  hoursInputInternalTesting = createInput("").position(250, 250).size(100);

  createSpan("Hours in Acceptance Testing Phase: ").position(10, 280);
  hoursInputAcceptanceTesting = createInput("").position(250, 280).size(100);

  // Quality assurance (QA) hours used in each phase
  createSpan("QA Hours in Analysis Phase: ").position(10, 310);
  qaInputAnalysis = createInput("").position(250, 310).size(100);

  createSpan("QA Hours in Design Phase: ").position(10, 340);
  qaInputDesign = createInput("").position(250, 340).size(100);

  createSpan("QA Hours in Programming Phase: ").position(10, 370);
  qaInputProgramming = createInput("").position(250, 370).size(100);

  createSpan("QA Hours in Internal Testing Phase: ").position(10, 400);
  qaInputInternalTesting = createInput("").position(250, 400).size(100);

  createSpan("QA Hours in Acceptance Testing Phase: ").position(10, 430);
  qaInputAcceptanceTesting = createInput("").position(250, 430).size(100);

  // Button to calculate statistics
  buttonCalculateStats = createButton("Calculate Statistics").position(10, 470);
  buttonCalculateStats.mousePressed(calculateStatistics);

  // Fields to display the calculated results for the entire project
  createSpan("Total Errors Found:").position(10, 510);
  totalErrorsInput = createInput("").position(250, 510).size(100).attribute('readonly', true);

  createSpan("Total Hours Used:").position(10, 540);
  totalHoursInput = createInput("").position(250, 540).size(100).attribute('readonly', true);

  createSpan("Errors per Hour (Total):").position(10, 570);
  errorsPerHourInput = createInput("").position(250, 570).size(100).attribute('readonly', true);

  createSpan("Total QA Hours:").position(10, 600);
  qaHoursInput = createInput("").position(250, 600).size(100).attribute('readonly', true);

  createSpan("QA Percentage:").position(10, 630);
  qaPercentageInput = createInput("").position(250, 630).size(100).attribute('readonly', true);

  createSpan("Errors in Acceptance Test per Project Hour:").position(10, 660);
  acceptanceTestErrorsPerHourInput = createInput("").position(350, 660).size(100).attribute('readonly', true);

  // Fields to display errors per hour and QA percentage for each phase
  createSpan("Errors per Hour (Analysis):").position(450, 10);
  errorsPerHourAnalysisInput = createInput("").position(700, 10).size(100).attribute('readonly', true);

  createSpan("QA % (Analysis):").position(450, 40);
  qaPercentageAnalysisInput = createInput("").position(700, 40).size(100).attribute('readonly', true);

  createSpan("Errors per Hour (Design):").position(450, 70);
  errorsPerHourDesignInput = createInput("").position(700, 70).size(100).attribute('readonly', true);

  createSpan("QA % (Design):").position(450, 100);
  qaPercentageDesignInput = createInput("").position(700, 100).size(100).attribute('readonly', true);

  createSpan("Errors per Hour (Programming):").position(450, 130);
  errorsPerHourProgrammingInput = createInput("").position(700, 130).size(100).attribute('readonly', true);

  createSpan("QA % (Programming):").position(450, 160);
  qaPercentageProgrammingInput = createInput("").position(700, 160).size(100).attribute('readonly', true);

  createSpan("Errors per Hour (Internal Testing):").position(450, 190);
  errorsPerHourInternalTestingInput = createInput("").position(700, 190).size(100).attribute('readonly', true);

  createSpan("QA % (Internal Testing):").position(450, 220);
  qaPercentageInternalTestingInput = createInput("").position(700, 220).size(100).attribute('readonly', true);

  createSpan("Errors per Hour (Acceptance Testing):").position(450, 250);
  errorsPerHourAcceptanceTestingInput = createInput("").position(700, 250).size(100).attribute('readonly', true);

  createSpan("QA % (Acceptance Testing):").position(450, 280);
  qaPercentageAcceptanceTestingInput = createInput("").position(700, 280).size(100).attribute('readonly', true);
}

function calculateTotals(analysisInput, designInput, programmingInput, internalTestingInput, acceptaneTestingInput){
    let total;
    let analysisPhase = parseFloat(analysisInput.value());
    let designPhase = parseFloat(designInput.value());
    let programmingPhase = parseFloat(programmingInput.value());
    let internalTestingPhase = parseFloat(internalTestingInput.value());
    let acceptanceTestingPhase = parseFloat(acceptaneTestingInput.value());

    total = analysisPhase + designPhase + programmingPhase + internalTestingPhase + acceptanceTestingPhase;
    return total;
}

function calculateErrorsPerHour(errorsForPhase, hoursForPhase){
    let errors = parseFloat(errorsForPhase.value());
    let hours = parseFloat(hoursForPhase.value());
    let errorsPerHour = errors/hours;
    return errorsPerHour;
}

function calculateQaPercentage(QaForPhase, hoursForPhase){
    let QaHours = parseFloat(QaForPhase.value());
    let hours = parseFloat(hoursForPhase.value());
    let QaPercentage = (QaHours/hours)*100;
    return QaPercentage;
}

function calculateStatistics() {
    //Calculate and show total errors
    let totalErrors = calculateTotals(errorInputAnalysis, errorInputDesign, errorInputProgramming, errorInputInternalTesting, errorInputAcceptanceTesting);
    totalErrorsInput.value(totalErrors);

    //Calculate and show total hours
    let totalHours = calculateTotals(hoursInputAnalysis, hoursInputDesign, hoursInputProgramming, hoursInputInternalTesting, hoursInputAcceptanceTesting)
    totalHoursInput.value(totalHours);

    //Calculate and show total QA hours
    let totalQaHours = calculateTotals(qaInputAnalysis, qaInputDesign, qaInputProgramming, qaInputInternalTesting, qaInputAcceptanceTesting);
    qaHoursInput.value(totalQaHours);

    //Calculate and show errors per hour for each phase + total
    let errorsPerHoursAnalysis = calculateErrorsPerHour(errorInputAnalysis, hoursInputAnalysis);
    errorsPerHourAnalysisInput.value(errorsPerHoursAnalysis);

    let errorsPerHourDesign = calculateErrorsPerHour(errorInputDesign, hoursInputDesign);
    errorsPerHourDesignInput.value(errorsPerHourDesign);

    let errorsPerHourProgramming = calculateErrorsPerHour(errorInputProgramming, hoursInputProgramming);
    errorsPerHourProgrammingInput.value(errorsPerHourProgramming);

    let errorsPerHourInternalTesting = calculateErrorsPerHour(errorInputInternalTesting, hoursInputInternalTesting);
    errorsPerHourInternalTestingInput.value(errorsPerHourInternalTesting);

    let errorsPerHourAcceptanceTesting = calculateErrorsPerHour(errorInputAcceptanceTesting, hoursInputAcceptanceTesting);
    errorsPerHourAcceptanceTestingInput.value(errorsPerHourAcceptanceTesting);
    
    let errorsPerHourTotal = errorsPerHoursAnalysis + errorsPerHourDesign + errorsPerHourProgramming + errorsPerHourInternalTesting + errorsPerHourAcceptanceTesting;
    errorsPerHourInput.value(errorsPerHourTotal);

    //Calculate and show QA percentage for each phase + total
    let qaPercentageAnalysis = calculateQaPercentage(qaInputAnalysis, hoursInputAnalysis)
    qaPercentageAnalysisInput.value(qaPercentageAnalysis);

    let qaPercentageDesign = calculateQaPercentage(qaInputDesign, hoursInputDesign)
    qaPercentageDesignInput.value(qaPercentageDesign);

    let qaPercentageProgramming = calculateQaPercentage(qaInputProgramming, hoursInputProgramming)
    qaPercentageProgrammingInput.value(qaPercentageProgramming);

    let qaPercentageInternalTesting = calculateQaPercentage(qaInputInternalTesting, hoursInputInternalTesting)
    qaPercentageInternalTestingInput.value(qaPercentageInternalTesting);

    let qaPercentageAcceptanceTesting = calculateQaPercentage(qaInputAcceptanceTesting, hoursInputAcceptanceTesting)
    qaPercentageAcceptanceTestingInput.value(qaPercentageAcceptanceTesting);

    let totalQaPercentage = (totalQaHours/totalHours)*100;
    qaPercentageInput.value(totalQaPercentage);

    //Calculate amount of errors found in acceptance test per project hour
    let AcceptanceTestErrors = parseFloat(errorInputAcceptanceTesting.value())
    let AcceptanceTestErrorsPerHour = AcceptanceTestErrors/totalHours;
    acceptanceTestErrorsPerHourInput.value(AcceptanceTestErrorsPerHour);
}