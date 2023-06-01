function appendCharacter(character) {
    document.querySelector("#currentexp").innerText += character;
}

function calculate() {
    try {
        document.querySelector("#result").innerText.value = evalExpression(document.querySelector("#currentexp").innerText);
    } catch (error) {
        document.querySelector("#result").innerText = "Error";
    }
}

function evalExpression(expression) {
    if (eval(expression) == Infinity) {
        return "ZeroDivisionError"
    }
    else {
        return eval(expression);
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
    console.log("clicked")
}
