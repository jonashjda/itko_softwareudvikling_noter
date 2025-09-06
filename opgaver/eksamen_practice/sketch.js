/*
Algoritme/Pseudokode for program generelt (uddybes under selve funktionerne):
1. Først skal programmet læse brugerinput fra 'enter requirement'
2. Programmet skal gem brugerinput i et array, når brugeren trykker på 'New Requirement'
3. Knapperne 'next' og 'previous' skal enten øge eller mindske index og vise det tilsvarende element i arrayet i output-feltet
4. Knappen 'delete' skal slette det element, der er vist i output-feltet
5. Knappen 'update' skal opdatere det element, der er vist i output-feltet
6. Knappen 'display all' skal vise alle elementer i arrayet i der store output-felt
*/

// Screen variables
let textRequirement;
let buttonNewRequirement;
let buttonNext;
let buttonPrevious;
let buttonDelete;
let buttonUpdate;
let buttonDisplayAll;
let allRequirementsInput;

// Array variables
let requirements = [];
let currentRequirementIndex = -1;

function setup() {
  createCanvas(600, 400);
  
  // Input for entering new requirements
  createSpan("Enter Requirement: ").position(10, 10);
  textRequirement = createInput("").position(150, 10).size(300);

  // Buttons for user interaction
  buttonNewRequirement = createButton("New Requirement").position(10, 50);
  buttonNewRequirement.mousePressed(addRequirement); // When clicked, adds a new requirement to the array

  buttonNext = createButton("Next").position(150, 50);
  buttonNext.mousePressed(nextRequirement); // Moves to the next requirement in the array

  buttonPrevious = createButton("Previous").position(220, 50);
  buttonPrevious.mousePressed(previousRequirement); // Moves to the previous requirement in the array

  buttonDelete = createButton("Delete").position(300, 50);
  buttonDelete.mousePressed(deleteRequirement); // Deletes the currently displayed requirement

  buttonUpdate = createButton("Update").position(360, 50);
  buttonUpdate.mousePressed(updateRequirement); // Updates the current requirement with new text

  buttonDisplayAll = createButton("Display all").position(430, 50);
  buttonDisplayAll.mousePressed(displayAllRequirements); // Displays all requirements in a text area

  // Input field for displaying all requirements
  createSpan("All Requirements:").position(10, 200);
  allRequirementsInput = createInput("", "textarea").position(150, 200).size(300, 80).attribute('readonly', true);

}

// This function adds a new requirement to the array
function addRequirement() {
  /*
    1. Indlæs brugerniput fra tekstfeltet og gem i en variabel
    2. Tilføj variabel sidst i array med krav
    3. Forøg currentRequirementIndex med 1 for at matche array-index for næste element
  */

  let requirement = textRequirement.value();
  requirements.push(requirement);
  currentRequirementIndex += 1;
}

// This function moves to the next requirement in the array
function nextRequirement() {
  /*
    1. Forøg index med 1 for at komme til næste element i arrayet
    2. Tjek det om det nye index er over længden på arrayet med requirements
      - Hvis index > længden på array, giv en alert og sænk index igen
      - Ellers, vis elementet med det nye index i tekstfeltet 
  */

  currentRequirementIndex += 1;

  if (currentRequirementIndex == requirements.length){
      alert("Ikke flere næste krav!");
      currentRequirementIndex -= 1;
  } else{
    textRequirement.value(requirements[currentRequirementIndex]);
  }
}

// This function moves to the previous requirement in the array
function previousRequirement() {
  /*
    1. Tjek om der findes flere forrige krav ved at tjekke om nuværende index er under 1
      - Hvis index < 1 = Der findes ikke flere forrige krav, giv en alert og lad være med at ændre index eller vise noget i  tekstfelt
      - Ellers = Der er stadig flere forrige krav, sænk index med 1 for at komme til forrige element i arrayet og vis tilsvarende element i tekstfeltet
  */

  if (currentRequirementIndex < 1){
    alert("No previous requirements exist");
  }else{
    currentRequirementIndex -= 1;
    textRequirement.value(requirements[currentRequirementIndex]);
  }
}

// This function deletes the currently displayed requirement
function deleteRequirement() {
  /*
    1. Elementet med nuværende index slettes fra array
    2. Vis enten ingenting, næste eller forrige krav, afhængig af om der er flere krav og om det krav, der lige blev slettet, var det sidste eller første:
      If-else statement: 
        - tjek om længden på array med krav er 0
          - Hvis den er 0 -> Der er ikke flere krav, vis et tomt string i tekstfeltet
        - Ellers, hvis nuværende index = længden på array med krav -> vis forrige krav
        - Ellers, hvis nuværende index er > -1 -> vis næste krav
  */

  requirements.splice(currentRequirementIndex, 1);

  if (requirements.length == 0){
    textRequirement.value("")
  } else if (currentRequirementIndex == requirements.length){
    previousRequirement();
  } else if (currentRequirementIndex > -1){
    currentRequirementIndex -= 1;
    nextRequirement();
  } 
}

// This function updates the currently displayed requirement
function updateRequirement() {
  /*
    1. Indlæs brugerens input og gemmes i en variabel
    2. Elementet med nuværende index opdateres med det indlæste input
  */

  let updatedRequirement = textRequirement.value();

  requirements[currentRequirementIndex] = updatedRequirement;
  console.log(requirements);
}

// This function displays all requirements in a text area
function displayAllRequirements() {
  /*
    1. Definer en variabel med et tomt string
    2. Iterer over array med krav
      - Tilføj hver iteration til samlet string + lidt ekstra tekst
    3. Vis samlet string i outputfelt
  */


  let longText = "";

  for (let i = 0; i < requirements.length; i++) {
    longText = longText + `Requirement ${i + 1}: ` + requirements[i] + ".";
   }

  allRequirementsInput.value(longText);
}
