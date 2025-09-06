function setup() {

    // Samlede feriebudget
    labelBudgetTotal = createSpan('Samlet feriebudget:');
    labelBudgetTotal.position(10, 70);
    textBudgetTotal = createInput();
    textBudgetTotal.position(200, 70);

    // Samlede feriebudget
    labelRejsedage = createSpan('Antal rejsedage:');
    labelRejsedage.position(10, 100);
    textRejsedage = createInput();
    textRejsedage.position(200, 100);

    // Dropdown-menu for tidspunkt
    labelKategori = createSpan('Kategorier');
    labelKategori.position(10, 130);
    dropdownKategori = createSelect();
    dropdownKategori.position(200, 130);
    dropdownKategori.option('Transport');
    dropdownKategori.option('Indkvartering');
    dropdownKategori.option('Mad');
    dropdownKategori.option('Aktiviteter');

    // Knap til beregne
    knapBeregn = createButton('Beregn');
    knapBeregn.position(10, 160);
    // Tilknyt funktion til knappen
    knapBeregn.mousePressed(beregnDagligtBudget);

    // Output for budget pr dag
    labelDagligtBudget = createSpan('Budget pr. dag:');
    labelDagligtBudget.position(10, 190);
    textDagligtBudget = createInput();
    textDagligtBudget.position(200, 190);

    // Output for feedback
    labelFeedback = createSpan('Feedback:');
    labelFeedback.position(10, 220);
    textFeedback = createInput();
    textFeedback.position(200, 220);
}

function beregnBudgetPerDag(budget, dage){
    return budget/dage;
}

function bestemBudgetKategori(budgetPrDag){
    let feedback;
    if(budgetPrDag < 50){
        feedback = "Stramt budget. Planlæg nøje";
    } else if(budgetPrDag >= 50 && budgetPrDag <=100){
        feedback = "Middelbudget. Godt planlagt!";
    } else{
        feedback = "Luksusbudget. Nyd ferien!";
    }

    return feedback;
}

function beregnDagligtBudget(){
    // Definer variable og indlæs brugerinput
    let samletFerieBudget = parseInt(textBudgetTotal.value())
    let antalDage = parseInt(textRejsedage.value())

    let budgetPrDag = beregnBudgetPerDag(samletFerieBudget, antalDage)
    let budgetFeedback = bestemBudgetKategori(budgetPrDag);

    textDagligtBudget.value(budgetPrDag);
    textFeedback.value(budgetFeedback);
}