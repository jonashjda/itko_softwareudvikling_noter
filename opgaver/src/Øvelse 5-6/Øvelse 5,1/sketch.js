let requirementCosts = []; // Array to store the costs of the 10 requirements
let buttonSave, buttonFindMostExpensive, buttonFindCheapest, buttonFindAverage, buttonFindTotal;
let mostExpensiveInput, cheapestInput, averageInput, totalInput;

let costInput1, costInput2, costInput3, costInput4, costInput5, costInput6, costInput7, costInput8, costInput9, costInput10;

function setup() {
  createCanvas(600, 540); 

  // Create input fields for each requirement cost, and label them
  createSpan("Requirement 1 Cost: ").position(10, 10);
  costInput1 = createInput("").position(150, 10).size(100);

  createSpan("Requirement 2 Cost: ").position(10, 40);
  costInput2 = createInput("").position(150, 40).size(100);

  createSpan("Requirement 3 Cost: ").position(10, 70);
  costInput3 = createInput("").position(150, 70).size(100);

  createSpan("Requirement 4 Cost: ").position(10, 100);
  costInput4 = createInput("").position(150, 100).size(100);

  createSpan("Requirement 5 Cost: ").position(10, 130);
  costInput5 = createInput("").position(150, 130).size(100);

  createSpan("Requirement 6 Cost: ").position(10, 160);
  costInput6 = createInput("").position(150, 160).size(100);

  createSpan("Requirement 7 Cost: ").position(10, 190);
  costInput7 = createInput("").position(150, 190).size(100);

  createSpan("Requirement 8 Cost: ").position(10, 220);
  costInput8 = createInput("").position(150, 220).size(100);

  createSpan("Requirement 9 Cost: ").position(10, 250);
  costInput9 = createInput("").position(150, 250).size(100);

  createSpan("Requirement 10 Cost: ").position(10, 280);
  costInput10 = createInput("").position(150, 280).size(100);

  // Save button to store the costs entered in the input fields
  buttonSave = createButton("Save").position(10, 320);
  // Call saveCosts function when button is pressed
  buttonSave.mousePressed(saveCosts); 

  // Button to find the most expensive requirement
  buttonFindMostExpensive = createButton("Find most expensive").position(80, 320);
  // Call findMostExpensive function when pressed

  buttonFindMostExpensive.mousePressed(findMostExpensive); 
  // Button to find the cheapest requirement
  buttonFindCheapest = createButton("Find cheapest").position(220, 320);
  // Call findCheapest function when pressed
  buttonFindCheapest.mousePressed(findCheapest); 

  // Button to find the average cost
  buttonFindAverage = createButton("Find average").position(340, 320);
  // Call findAverage function when pressed
  buttonFindAverage.mousePressed(findAverage); 

  // Button to find the total cost
  buttonFindTotal = createButton("Find total").position(460, 320);
  // Call findTotal function when pressed
  buttonFindTotal.mousePressed(findTotal); 

  // Field to display the most expensive requirement
  createSpan("Most Expensive Requirement:").position(10, 360);
  // Display result in a readonly field
  mostExpensiveInput = createInput("").position(200, 360).size(100).attribute('readonly', true); 
  
  // Field to display the cheapest requirement
  createSpan("Cheapest Requirement:").position(10, 390);
  // Display result in a readonly field
  cheapestInput = createInput("").position(200, 390).size(100).attribute('readonly', true); 

  // Field to display the average requirement cost
  createSpan("Average Requirement Cost:").position(10, 420);
  // Display result in a readonly field
  averageInput = createInput("").position(200, 420).size(100).attribute('readonly', true); 

  // Field to display the total cost of all requirements
  createSpan("Total Requirement Cost:").position(10, 450);
  // Display result in a readonly field
  totalInput = createInput("").position(200, 450).size(100).attribute('readonly', true); 
}


// Function to save the costs entered in the input fields
function saveCosts() {
  // Insert your code here
  let cost1 = parseInt(costInput1.value());;
  let cost2 = parseInt(costInput2.value());
  let cost3 = parseInt(costInput3.value());
  let cost4 = parseInt(costInput4.value());
  let cost5 = parseInt(costInput5.value())
  let cost6 = parseInt(costInput6.value());
  let cost7 = parseInt(costInput7.value());
  let cost8 = parseInt(costInput8.value());
  let cost9 = parseInt(costInput9.value());
  let cost10 = parseInt(costInput10.value());

  requirementCosts[0] = cost1;
  requirementCosts[1] = cost2;
  requirementCosts[2] = cost3;
  requirementCosts[3] = cost4;
  requirementCosts[4] = cost5;
  requirementCosts[5] = cost6;
  requirementCosts[6] = cost7;
  requirementCosts[7] = cost8;
  requirementCosts[8] = cost9;
  requirementCosts[9] = cost10;

  console.log(requirementCosts)
}


// Function to find the most expensive requirement cost
function findMostExpensive() {
  let largestCost = requirementCosts[0];
  for (i = 1; i < requirementCosts.length; i++){
    if (requirementCosts[i] > largestCost){
      largestCost = requirementCosts[i];
    }
  }
  mostExpensiveInput.value(largestCost);
}

// Function to find the cheapest requirement cost
function findCheapest() {
  let lowestCost = requirementCosts[0];
  for (i = 1; i < requirementCosts.length; i++){
    if (requirementCosts[i] < lowestCost){
      lowestCost = requirementCosts[i];
    }
  }
  cheapestInput.value(lowestCost);
}

// Function to calculate and display the average requirement cost
function findAverage() {
  // Insert your code here
  let totalCost = 0 ;
  for (i = 0; i < requirementCosts.length; i++){
    totalCost = totalCost + requirementCosts[i];
  }

  let avgCost = totalCost/requirementCosts.length;
  averageInput.value(avgCost);
}

// Function to calculate and display the total requirement cost
function findTotal() {
  // Insert your code here
  let totalCost = 0;
  for (i = 0; i < requirementCosts.length; i++){
    totalCost = totalCost + requirementCosts[i];
  }

  totalInput.value(totalCost);
}