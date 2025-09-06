// Defining variables for the user interface and data storage
let textSessionDuration, labelSessionDuration;
let buttonSaveSession, buttonCalculateStatistics;
let labelEnteredSessions, textEnteredSessions;
let labelTotalTime, textTotalTime;
let labelAverageTime, textAverageTime;
let sessionDurations = [];

function setup() {
  noCanvas();

  // Input for entering each session duration
  labelSessionDuration = createSpan('Enter Session Duration (minutes)');
  labelSessionDuration.position(10, 30);
  textSessionDuration = createInput();
  textSessionDuration.position(300, 30);

  // Button to save session duration
  buttonSaveSession = createButton('Save Session');
  buttonSaveSession.position(10, 60);
  buttonSaveSession.mousePressed(saveSession);

  // Button to calculate statistics
  buttonCalculateStatistics = createButton('Calculate Statistics');
  buttonCalculateStatistics.position(300, 60);
  buttonCalculateStatistics.mousePressed(calculateStatistics);

  // Display for entered session durations
  labelEnteredSessions = createSpan('Entered Sessions:');
  labelEnteredSessions.position(10, 100);
  textEnteredSessions = createInput();
  textEnteredSessions.position(200, 100);
  textEnteredSessions.attribute('readonly', '');

  // Display for total training time
  labelTotalTime = createSpan('Total Training Time:');
  labelTotalTime.position(10, 130);
  textTotalTime = createInput();
  textTotalTime.position(200, 130);
  textTotalTime.attribute('readonly', '');

  // Display for average session duration
  labelAverageTime = createSpan('Average Session Duration:');
  labelAverageTime.position(10, 160);
  textAverageTime = createInput();
  textAverageTime.position(200, 160);
  textAverageTime.attribute('readonly', '');
}

function saveSession() {
    // Definer variable Indlæs brugerinput
    let sessionDurationInput = parseFloat(textSessionDuration.value());
    sessionDurations.push(sessionDurationInput);
    textEnteredSessions.value(sessionDurations);
}

function calculateStatistics() {
    let totalTrainingTime = 0;
    let averageTrainingTime;

    // Iterate over array and add number to totalTrainingTime
    for (let i = 0; i < sessionDurations.length; i++) {
        totalTrainingTime = totalTrainingTime + sessionDurations[i];
    }
    
    // Calculate average session duration
    averageTrainingTime = totalTrainingTime/sessionDurations.length;

    // Show calculated results¨
    textTotalTime.value(totalTrainingTime);
    textAverageTime.value(averageTrainingTime);
}