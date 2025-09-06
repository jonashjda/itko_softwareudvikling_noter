let textstakeholderName;
let textstakeholderEngagement;
let textstakeholderImportance;
let textstakeholderStrategy;

let buttonMakeStrategy;

function setup() {
  // Stakeholder 1
  createSpan("Stakeholder Name: ").position(10, 10);
  textstakeholderName = createInput("").position(150, 10);
  createSpan("Engagement (1-10): ").position(10, 40);
  textstakeholderEngagement = createInput("").position(150, 40);
  createSpan("Importance (1-10): ").position(10, 70);
  textstakeholderImportance = createInput("").position(150, 70);
  createSpan("Strategy: ").position(10, 100);
  textstakeholderStrategy = createInput("").position(150, 100);
  textstakeholderStrategy.attribute("disabled", "");
  textstakeholderStrategy.size(600,45);

  // Make strategy button
  buttonMakeStrategy = createButton("Make strategy").position(10, 150);
  buttonMakeStrategy.mousePressed(MakeStrategy);
}

function MakeStrategy() {
  //Definer variable
  let stakeholderName = String(textstakeholderName.value());
  let stakeholderEngagement = parseFloat(textstakeholderEngagement.value());
  let stakeholderImportance = parseFloat(textstakeholderImportance.value());
  let stakeholderStrategy;

  if (stakeholderImportance > 4 && stakeholderImportance < 11 && stakeholderEngagement < 6 && stakeholderEngagement > 0){
    stakeholderStrategy = `${stakeholderName}: High importance, low engagement`
  } else if (stakeholderImportance > 4 && stakeholderImportance < 10 && stakeholderEngagement > 5 && stakeholderEngagement < 11) {
    stakeholderStrategy = `${stakeholderName}: High importance, high engagement`
  } else if (stakeholderImportance < 5 && stakeholderImportance > 0 && stakeholderEngagement > 4 && stakeholderEngagement < 11) {
    stakeholderStrategy = `${stakeholderName}: Low importance, low engagement`
  } else if (stakeholderImportance < 5 && stakeholderImportance > 0 && stakeholderEngagement < 6 && stakeholderEngagement > 0) {
    stakeholderStrategy = `${stakeholderName}: Low importance, high engagement`
  } else {
    alert("ERROR: [VALUE NOT IN ALLOWED RANGE]");
    stakeholderStrategy = `Unabe to calculate strategy for ${stakeholderName}`
  }

  textstakeholderStrategy.value(stakeholderStrategy)
}