/*
The calculator uses the math.js library to evaluate expressions as an alternative to eval()
© Jos de Jong and contributors
The math.evaluate() method precisely
*/
function appendCharacter(character) {
    document.querySelector("#currentexp").innerText += character;
}

function calculate() {
    try {
        document.querySelector("#result").innerText.value = math.evaluate(document.querySelector("#currentexp").innerText);
    } catch (error) {
        document.querySelector("#result").innerText = "Error"

    }
}

function evalExpression(expression) {
    if (math.evaluate(expression) == Infinity) {
        return "ZeroDivisionError"
    }
    else {
        return math.evaluate(expression);
    }
}
function clearResult() {
    document.querySelector("#currentexp").innerText = "";
    document.querySelector("#result").innerText = "";
}
function deleteChar() {
    let exp = document.querySelector("#currentexp").innerText;
    let splitExp = exp.split("");
    splitExp.pop();
    document.querySelector("#currentexp").innerText = splitExp.join("");
}
