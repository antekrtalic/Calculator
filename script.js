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



window.addEventListener('keydown', function(e) {
    const paragraph = document.querySelector('p');
    let text = paragraph.textContent;
    let x, num1, num2;
    while (text.length > 16) {
        paragraph.textContent = text.slice(0, text.length - 1);
    }

    switch(e.key) {
        case "Delete":
            paragraph.innerHTML = "";
            break;
        case "Escape":
            paragraph.innerHTML = "";
            break;
        case "Backspace":
            console.log("da");
            paragraph.textContent = text.slice(0, text.length - 1);
            break;
        case "1": 
            paragraph.innerHTML += "1";
            break;
        case "2": 
            paragraph.innerHTML += "2";
            break;
        case "3": 
            paragraph.innerHTML += "3";
            break;
        case "4": 
            paragraph.innerHTML += "4";
            break;
        case "5": 
            paragraph.innerHTML += "5";
            break;
        case "6": 
            paragraph.innerHTML += "6";
            break;
        case "7": 
            paragraph.innerHTML += "7";
            break;
        case "8": 
            paragraph.innerHTML += "8";
            break;
        case "9": 
            paragraph.innerHTML += "9";
            break;
        case ",":
            paragraph.innerHTML += ".";
            break;
        case "+":
            paragraph.innerHTML += "+";
            x = "+";
            break;
        case "-":
            paragraph.innerHTML += "-";
            x = "-";
            break;
        case "*":
            paragraph.innerHTML += "*";
            x = "*";
            break;
        case "/":
            x = "/";
            break;
        case "Enter":
            operate(x, num1, num2);
            break;
        case "F9": 
        default:
            break;
    }
    
    console.log(text.length);
});