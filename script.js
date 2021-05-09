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
    if (a === 0 || b === 0) {
        alert("Cannot divide by zero");
    }else {
        return a / b;
    }
    
}

/* Dividing output for calculation */
function evaluation(text) {
    if (text.includes("+")) {
        text = text.split("+");
        text.splice(1, 0, "+");
    } else if (text.includes("-")) {
        text = text.split("-");
        text.splice(1, 0, "-");
    } else if (text.includes("*")) {
        text = text.split("*");
        text.splice(1, 0, "*");
    } else if (text.includes("/")) {
        text = text.split("/");
        text.splice(1, 0, "/");
    }
   
    return text;
}

/* Calculating numbers */
function operate(oper, num1, num2) {
    let result;
    if (oper === "+") {
        result = add(num1, num2);
    } else if (oper === "-") {
        result = subtract(num1, num2);
    } else if (oper === "*") {
        result = multiply(num1, num2);
    } else if (oper === "/") {
        result = divide(num1, num2);
    } else {
        alert("Enter basic math operator(+,-,*,/)");
    }
    return result;
}

/* Displaying output by pressing keys */

window.addEventListener('keydown', function(e) {
    const paragraph = document.querySelector('p');
    let text = paragraph.textContent;
    let values, num1, num2, oper;
    e.className = "active";
    let selected = document.getElementsByClassName('active');
    
    
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
        case "0":
            paragraph.textContent += "0";
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
            paragraph.textContent += "7";
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
            if (text.match(/[1-9]/)) {
                if (text.indexOf("+")) paragraph.textContent += "+";
            }
            break;
        case "-":
            paragraph.textContent += "-";
            break;
        case "*":
            paragraph.textContent += "*";
            break;
        case "/":
            paragraph.textContent += "/";
            break;
        case "Enter":
            values = evaluation(text);
            num1 = parseInt(values[0]);
            num2 = parseInt(values[2]);
            oper = values[1];
            
            
            if ((num1 && num2) || num1 === 0 || num2 === 0) paragraph.textContent = operate(oper, num1, num2);
            break;
        case "F9": 
            if (text.match(/[1-9]/)) {
                if (paragraph.textContent[0] === "-")  {
                    paragraph.textContent = text.replace("-", "");
                } else {
                    paragraph.textContent = "-" + paragraph.textContent.slice(0);
                }
            }
        default:
            break;
    }

    
});

/* Displaying output by pressing mouse */

window.addEventListener('click', function(e) {
    const paragraph = document.querySelector('p');
    let text = paragraph.textContent;
    let count_signs = 0;

    switch (e.target.id) {    
        case "CE":
            paragraph.textContent = "0";
            break;
        case "C":
            paragraph.textContent = "0";
            break;
        case "Back":
            paragraph.textContent = text.slice(0, text.length - 1);
            break;
        case "Zero":
            paragraph.textContent += "0";
            break;
        case "One":
            paragraph.textContent += "1";
            break;
        case "Two":
            paragraph.textContent += "2";
            break;
        case "Three":
            paragraph.textContent += "3";
            break;
        case "Four":
            paragraph.textCntent += "4";
            break;
        case "Five":
            paragraph.textContent += "5";
            break;
        case "Six":
            paragraph.textContent += "6";
            break;
        case "Seven":
            paragraph.textContent += "7";
            break;
        case "Eight":
            paragraph.textContent += "8";
            break;
        case "Nine":
            paragraph.textContent += "9";
            break;
        case "Plus":
            if (paragraph.textContent.indexOf("+") < 0) paragraph.textContent += "+";
            break;
        case "Minus":
            paragraph.textContent += "-";
            break;
        case "Multiply":
            paragraph.textContent += "*";
            break;
        case "Divide":
            paragraph.textContent += "/";
            break;
        case "Dot":
            paragraph.textContent += ".";
            break;
        case "Equals":
            values = evaluation(text);
            num1 = parseInt(values[0]);
            num2 = parseInt(values[2]);
            oper = values[1];
            
            
            if ((num1 && num2) || num1 === 0 || num2 === 0) paragraph.textContent = operate(oper, num1, num2);
            break;
        case "Sign":
            if (text.match(/[1-9]/)) {
                if (paragraph.textContent[0] === "-") {
                    paragraph.textContent = text.replace("-","");
                } else {
                    paragraph.textContent = "-" + paragraph.textContent.slice(0);
                }
            }
        default:
            break;
    }
    
});

