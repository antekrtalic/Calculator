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
    
    let x, num1, num2, numbers;
    

    switch(e.key) {
        case "Delete":
            paragraph.textContent = "";
            break;
        case "Escape":
            paragraph.textContent = "";
            break;
        case "Backspace":
            console.log("da");
            paragraph.textContent = text.slice(0, text.length - 1);
            break;
        case "1": 
            paragraph.textContent += "1";
            break;
        case "2": 
            paragraph.textContent += "2";
            break;
        case "3": 
            paragraph.textContent += "3";
            break;
        case "4": 
            paragraph.textContent += "4";
            break;
        case "5": 
            paragraph.textContent += "5";
            break;
        case "6": 
            paragraph.textContent += "6";
            break;
        case "7": 
            paragraph.textCOntent += "7";
            break;
        case "8": 
            paragraph.textContent += "8";
            break;
        case "9": 
            paragraph.textContent += "9";
            break;
        case ",":
            paragraph.textContent += ".";
            break;
        case "+":
            paragraph.textContent += "+";

            num1 = text.slice(0, indexOf("+"));
            num2 = text.slice(0, indexOf("+") + 1);
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
    console.log(num1);
    console.log(num2);
});