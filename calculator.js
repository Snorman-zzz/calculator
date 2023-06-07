let historyList = document.getElementById("history");
let result = document.getElementById("result");
let calculationHistory = [];

function appendToResult(value) {
    result.value += value;
}

function calculateResult() {
    let expression = result.value;
    let calculatedResult = eval(expression);

    if (isNaN(calculatedResult)) {
        result.value = "Error";
    } else {
        result.value = calculatedResult;
        calculationHistory.push(expression + " = " + calculatedResult());
        updateHistory();
    }
}

function clearResult() {
    result.value = "";
}

function updateHistory() {
    historyList.innerHTML = "";
    calculationHistory.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

document.querySelector("button[onclick='appendToResult(\'+\')']").addEventListener("click", appendToResult);
document.querySelector("button[onclick='calculateResult()']").addEventListener("click", calculateResult);
