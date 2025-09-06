// Defining variables for the user interface
let textMinHeartRate, textMaxHeartRate, labelMinHeartRate, labelMaxHeartRate;
let textAverageHeartRate, labelAverageHeartRate;
let labelFeedback, textFeedback;
let buttonCheckIntensity;

function setup() {
  noCanvas();
  
  // Input for minimum target heart rate
  labelMinHeartRate = createSpan('Minimum Target Heart Rate (bpm)');
  labelMinHeartRate.position(10, 30);
  textMinHeartRate = createInput();
  textMinHeartRate.position(300, 30);

  // Input for maximum target heart rate
  labelMaxHeartRate = createSpan('Maximum Target Heart Rate (bpm)');
  labelMaxHeartRate.position(10, 60);
  textMaxHeartRate = createInput();
  textMaxHeartRate.position(300, 60);

  // Input for average heart rate achieved during the workout
  labelAverageHeartRate = createSpan('Average Heart Rate (bpm)');
  labelAverageHeartRate.position(10, 90);
  textAverageHeartRate = createInput();
  textAverageHeartRate.position(300, 90);

  // Button to check if the workout is within the target heart rate zone
  buttonCheckIntensity = createButton('Check Intensity');
  buttonCheckIntensity.position(10, 130);
  buttonCheckIntensity.mousePressed(checkTrainingIntensity);

  // Output for feedback
  labelFeedback = createSpan('Feedback:');
  labelFeedback.position(10, 170);
  textFeedback = createInput();
  textFeedback.position(200, 170);
  textFeedback.attribute('readonly', '');
}

function checkTrainingIntensity() {
  // Students can insert the code to check if the workout was within the target heart rate zone here
  // Definer variable
  let maxHeartRate;
  let minHeartRate;
  let averageHeartRate;
  let feedback;

  // Indlæs brugerinput
  maxHeartRate = textMaxHeartRate.value();
  minHeartRate = textMinHeartRate.value();
  averageHeartRate = textAverageHeartRate.value();

  // Definer feedback baseret på brugerens input
  if(maxHeartRate == "" || minHeartRate == "" || averageHeartRate == ""){
    alert("Error: Missing input");
    feedback = "ERROR";
  } else if (averageHeartRate > maxHeartRate){
    feedback = "Warning: You exceeded the endurance zone. Try to keep it lower next time.";
  } else if (averageHeartRate < minHeartRate){
    feedback = "Consider increasing your intensity to reach your endurance zone.";
  } else if (averageHeartRate < maxHeartRate+1 && averageHeartRate > minHeartRate-1){
    feedback = "Good job! You stayed within your endurance training zone.";
  } else {
    feedback = "Error";
  }

  // Vis feedback i tekstfeltet
  textFeedback.value(feedback);
}