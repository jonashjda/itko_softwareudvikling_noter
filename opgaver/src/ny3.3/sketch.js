function calculateRisk(input1, input2, input3, output) {
    const riskName = document.getElementById(input1);
    const riskNameValue = riskName.value;
    const likelihood = document.getElementById(input2);
    const likelihoodValue = likelihood.value;
    const severity = document.getElementById(input3);
    const severityValue = severity.value;
    let score;

    //Beregn score
    score = likelihoodValue * severityValue;

    //Vis scores
    document.getElementById(output).value = score;

    if (score > 9) {
        alert(`IMPORTANT: ${riskNameValue} IS AT HIGH RISK: ${score}`);
    }
}