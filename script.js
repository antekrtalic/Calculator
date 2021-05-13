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
    console.log(text);
    return text;
}

/* Calculating numbers */
function operate(oper, num1, num2) {
    let result;

    /* Checking if its integer  or float */
    if (!isNaN(num1) && num1.indexOf(".") < 0) {
        num1 = parseInt(num1);
    } else {
        num1 = parseFloat(num1);
    }
    if (!isNaN(num2) && num2.indexOf(".") < 0) {
        num2 = parseInt(num2);
    } else {
        num2 = parseFloat(num2);
    }


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
    let values, num1, num2, oper, math_oper, oper_pos;
    e.className = "active";
    let selected = document.getElementsByClassName('active');
    
    if (text.length < 16) {

        switch(e.key) {
            case "Delete":
                paragraph.textContent = "";
                break;
            case "Escape":
                paragraph.textContent = "";
                break;
            case "Backspace":
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
                if (!(text.match(/\.{1}/)) && (!text[0].match(/\./))) {
                    paragraph.textContent += ".";
                }
                if (text.match(/[\+\-\*\/]/)) {
                    math_oper = text.match(/[\+\-\*\/]/);
                    oper_pos = text.indexOf(math_oper);
                    if (oper_pos >= 0 && (!(text.slice(oper_pos+1).match(/\.{1}/))) && (!(text[oper_pos+1].match(/\.{1}/)))) {
                        paragraph.textContent += ".";
                    }
                }
                break;
            case "+":
                if (text.match(/[1-9]/)) {
                    if (!(text.match(/[\+\-\*\/]/))) paragraph.textContent += "+";
                }
                break;
            case "-":
                if (text.match(/[1-9]/)) {
                    if (!(text.match(/[\+\-\*\/]/))) paragraph.textContent += "-";
                }
                break;
            case "*":
                if (text.match(/[1-9]/)) {
                    if (!(text.match(/[\+\-\*\/]/))) paragraph.textContent += "*";
                }
                break;
            case "/":
                if (text.match(/[1-9]/)) {
                    if (!(text.match(/[\+\-\*\/]/))) paragraph.textContent += "/";
                }
                break;
            case "Enter":
                values = evaluation(text);

                num1 = values[0];
                num2 = values[2];
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
    } else {
        if (e.key === "Backspace") {
            paragraph.textContent = text.slice(0, text.length - 1);
        }
    }
    
});

/* Displaying output by pressing mouse */

window.addEventListener('click', function(e) {
    const paragraph = document.querySelector('p');
    let text = paragraph.textContent;
    let count_signs = 0;
    let math_oper, oper_pos;
    if (text.length < 16) {
        switch (e.target.id) {    
            case "CE":
                paragraph.textContent = "0";
                break;
            case "C":
                paragraph.textContent = "0";
                break;
            case "Back":
                paragraph.textContent = text.slice(0, text.length - 1);
                console.log(text.length);
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
                paragraph.textContent += "4";
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
                if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text)) {
                    paragraph.textContent += "+";
                    values = evaluation(text);
                    num1 = values[0];
                    num2 = values[2];
                    oper = values[1];
                    
                    if (num1 === "0" || num2 === "0") {
                        alert("Can't divide by zero");
                        paragraph.textContent = "0";
                    }
                    
                    if (num1 !== "0" || num2 !== "0") paragraph.textContent = operate(oper, num1, num2) + "+";
                }
                break;
            case "Minus":
                if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text)) {
                    paragraph.textContent += "-";
                    values = evaluation(text);
                    num1 = values[0];
                    num2 = values[2];
                    oper = values[1];
                    
                    
                    if ((num1 && num2) || num1 === 0 || num2 === 0) paragraph.textContent = operate(oper, num1, num2) + "-";
                }
                break;
            case "Multiply":
                if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text)) {
                    paragraph.textContent += "*";
                    values = evaluation(text);
                    num1 = values[0];
                    num2 = values[2];
                    oper = values[1];
                    
                    
                    if ((num1 && num2) || num1 === 0 || num2 === 0) paragraph.textContent = operate(oper, num1, num2) + "*";
                }
                break;
            case "Divide":
                if (/[1-9]/.test(text[text.length - 1])) {
                    paragraph.textContent += "/";
                    values = evaluation(text);
                    num1 = values[0];
                    num2 = values[2];
                    oper = values[1];
                    
                    if (parseInt(num1) === 0 && parseInt(num2) === 0) {
                        paragraph.textContent = "Result is undefined";
                    } else if (parseInt(num2) === 0) {
                        paragraph.textContent = "Cannot divide by zero";
                    }
                    
                    if (num1.match(/[1-9]/) && num2.match(/[1-9]/)) paragraph.textContent = operate(oper, num1, num2) + "/";
                }
                break;
            case "Dot":
                if (!(text.match(/\.{1}/)) && (!text[0].match(/\./)) && (!(text.match(/[\+\-\*\/]/)))) {
                    paragraph.textContent += ".";
                }
                if (text.match(/[\+\-\*\/]/)) {
                    math_oper = text.match(/[\+\-\*\/]/);
                    oper_pos = text.indexOf(math_oper);
                    if (oper_pos >= 0 && (!(text.slice(oper_pos+1).match(/\.{1}/))) && (!(text[oper_pos+1].match(/\.{1}/)))) {
                        paragraph.textContent += ".";
                    }
                }
                break;
            case "Equals":
                values = evaluation(text);
                num1 = values[0];
                num2 = values[2];
                oper = values[1];
                
                
                paragraph.textContent = "0";
                if ((num1 && num2) && (num1 !== 0 || num2 !== 0)) paragraph.textContent = operate(oper, num1, num2);

                
                
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
        /* Calculating multiple math operations */

        if (/[\+\-\*\/]/.test(text[text.length - 1]) && (/[\+\-\*\/]/.test(text.slice(0, text[text.length - 2])))) {
            values = evaluation(text.slice(0, text[text.length - 2]));
            num1 = values[0];
            num2 = values[2];
            oper = values[1];
            
            
            if ((num1 && num2) || num1 === 0 || num2 === 0) paragraph.textContent = operate(oper, num1, num2);
        }
    } else {
        if (e.key === "Backspace") {
            paragraph.textContent = text.slice(0, text.length - 1);
            
        }
    }
});

