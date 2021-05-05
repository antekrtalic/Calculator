/* Basic math operations */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(oper, num1, num2) {
    if (oper === "+") {
        add(num1, num2);
    } else if (oper === "-") {
        subtract(num1, num2);
    } else if (oper === "*") {
        multiply(num1, num2);
    } else if (oper === "/") {
        divide(num1, num2);
    } else {
        alert("Enter basic math operator(+,-,*,/)");
    }
}

let paragraph = document.getElementsByTagName('p');

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 104) {
        paragraph[0].innerHTML = "";
    }
    if (e.key === "Esc") {
        paragraph[0].textContent = "";
    } else {
        paragraph[0].textContent += e.key;
    }
    console.log(e);
    
});