// Define the classError class
class classError {
    constructor(id, description, severity, status) {
      this.id = id; // ID entered by the user, no uniqueness check
      this.description = description;
      this.severity = severity;
      this.status = status;
      this.timestamp = new Date(); // Automatically set to the current time
    }

    // Method to update error details
    updateError(description, severity, status) {
      this.description = description;
      this.severity = severity;
      this.status = status;
    }
}

// Array to store error objects
let errorList = [];
let currentIndex = -1;

// Variables for input fields and buttons
let textDescriptionInput, textSeverityInput, textStatusInput, textErrorIdInput, textTimestampInput;
let buttonAdd, buttonUpdate, buttonDelete, buttonPrevious, buttonNext;

// Setup function to initialize UI
function setup() {
createCanvas(600, 400);

// Create input fields for error details
createSpan("Error ID: ").position(10, 10);
textErrorIdInput = createInput("").position(150, 10).size(200); // ID entered by the user

createSpan("Error Description: ").position(10, 40);
textDescriptionInput = createInput("").position(150, 40).size(200);

createSpan("Severity: ").position(10, 70);
textSeverityInput = createInput("").position(150, 70).size(200);

createSpan("Status: ").position(10, 100);
textStatusInput = createInput("").position(150, 100).size(200);

createSpan("Timestamp: ").position(10, 130);
textTimestampInput = createInput("").position(150, 130).size(200).attribute('readonly', true); 

// Create buttons for actions
buttonAdd = createButton("Add Error").position(10, 170);
buttonAdd.mousePressed(addError);

buttonUpdate = createButton("Update Error").position(100, 170);
buttonUpdate.mousePressed(updateError);

buttonDelete = createButton("Delete Error").position(200, 170);
buttonDelete.mousePressed(deleteError);

buttonPrevious = createButton("Previous Error").position(10, 210);
buttonPrevious.mousePressed(previousError);

buttonNext = createButton("Next Error").position(150, 210);
buttonNext.mousePressed(nextError);
}

// Function to add a new error
function addError() {
    //Læs brugerinput
    let errorID = String(textErrorIdInput.value());
    let errorDescription = String(textDescriptionInput.value());
    let errorSeverity = String(textSeverityInput.value());
    let errorStatus = String(textStatusInput.value());

    let error = new classError(errorID, errorDescription, errorSeverity, errorStatus);
    errorList.push(error)
    console.log(errorList)
    currentIndex += 1;
}

// Function to update the currently displayed error
function updateError() {
    //Læs brugerinput
    let errorDescription = String(textDescriptionInput.value());
    let errorSeverity = String(textSeverityInput.value());
    let errorStatus = String(textStatusInput.value());

    errorList[currentIndex].description = errorDescription;
    errorList[currentIndex].severity = errorSeverity;
    errorList[currentIndex].status = errorStatus;
    console.log(errorList)
}

// Function to delete the currently displayed error
function deleteError() {
    errorList.splice(currentIndex, 1);
    console.log(errorList);
    currentIndex -= 1;
    if (currentIndex > -2){
        nextError();
    } else if (currentIndex == errorList.length-1){
        previousError(); 
    }
}

// Function to display the previous error
function previousError() {
    if (currentIndex < 1){
        alert("Already at first error");
    } else{
        currentIndex -= 1;
        textErrorIdInput.value(errorList[currentIndex].id);
        textDescriptionInput.value(errorList[currentIndex].description);
        textSeverityInput.value(errorList[currentIndex].severity);
        textStatusInput.value(errorList[currentIndex].status);
        textTimestampInput.value(errorList[currentIndex].timestamp);
    }
    
}

// Function to display the next error
function nextError() {
    currentIndex += 1;
    if (currentIndex == errorList.length){
        alert("Already at last error");
        currentIndex -= 1;
    } else{
        textErrorIdInput.value(errorList[currentIndex].id);
        textDescriptionInput.value(errorList[currentIndex].description);
        textSeverityInput.value(errorList[currentIndex].severity);
        textStatusInput.value(errorList[currentIndex].status);
        textTimestampInput.value(errorList[currentIndex].timestamp);
    }
    
}
  