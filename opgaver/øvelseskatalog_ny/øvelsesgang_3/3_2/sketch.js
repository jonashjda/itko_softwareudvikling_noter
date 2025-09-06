// Defining variables for the user interface
let dropdownSessionType, labelSessionType;
let textMinHeartRate, textMaxHeartRate, labelMinHeartRate, labelMaxHeartRate;
let textAverageHeartRate, labelAverageHeartRate;
let labelFeedback, textFeedback;
let buttonEvaluateIntensity;

function setup() {
  noCanvas();

  // Dropdown for session type selection
  labelSessionType = createSpan('Session Type');
  labelSessionType.position(10, 30);
  dropdownSessionType = createSelect();
  dropdownSessionType.position(200, 30);
  dropdownSessionType.option('Interval');
  dropdownSessionType.option('Long Endurance');
  dropdownSessionType.option('Short Endurance');

  // Input for minimum target heart rate
  labelMinHeartRate = createSpan('Minimum Target Heart Rate (bpm)');
  labelMinHeartRate.position(10, 60);
  textMinHeartRate = createInput();
  textMinHeartRate.position(300, 60);

  // Input for maximum target heart rate
  labelMaxHeartRate = createSpan('Maximum Target Heart Rate (bpm)');
  labelMaxHeartRate.position(10, 90);
  textMaxHeartRate = createInput();
  textMaxHeartRate.position(300, 90);

  // Input for average heart rate achieved during the workout
  labelAverageHeartRate = createSpan('Average Heart Rate (bpm)');
  labelAverageHeartRate.position(10, 120);
  textAverageHeartRate = createInput();
  textAverageHeartRate.position(300, 120);

  // Button to evaluate if the workout met the target intensity
  buttonEvaluateIntensity = createButton('Evaluate Intensity');
  buttonEvaluateIntensity.position(10, 160);
  buttonEvaluateIntensity.mousePressed(evaluateIntensity);

  // Output for feedback
  labelFeedback = createSpan('Feedback:');
  labelFeedback.position(10, 200);
  textFeedback = createInput();
  textFeedback.position(200, 200);
  textFeedback.attribute('readonly', '');
  textFeedback.size(500, 100);
}

function evaluateIntensity() {
  // Students can insert the code to evaluate intensity based on session type and target heart rate here
  // Definer variable og indlæs brugerinput fra de tre inputfelter
  let maxHeartRate = parseFloat(textMaxHeartRate.value());
  let minHeartRate = parseFloat(textMinHeartRate.value());
  let averageHeartRate = parseFloat(textAverageHeartRate.value());
  let userChoice = dropdownSessionType.value();
  let feedback;

  switch (userChoice){
    case "Interval":
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
      break;
    case "Long Endurance":
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
      break;
    case "Short Endurance":
      if(maxHeartRate == "" || minHeartRate == "" || averageHeartRate == ""){
        alert("Error: Missing input");
        feedback = "ERROR";
      } else if (averageHeartRate > maxHeartRate){
        feedback = "SES: Lower intensity to stay on target.";
      } else if (averageHeartRate < minHeartRate){
        feedback = "SES: Increase intensity to hit the target.";
      } else if (averageHeartRate < maxHeartRate+1 && averageHeartRate > minHeartRate-1){
        feedback = "SES: Great job — you're right on target!";
      } else {
        feedback = "Error";
      }
      break;
  }
  
  // Vis feedback i tekstfeltet
  textFeedback.value(feedback);
}
