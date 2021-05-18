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

    // if (parseInt(num1) === 0 && parseInt(num2) === 0) {
    //     result = "Result is undefined";
    // } else if (parseInt(num2) === 0) {
    //     result = "Cannot divide by zero";
    // }

    if (oper === "+") {
        result = add(num1, num2);
    } else if (oper === "-") {
        result = subtract(num1, num2);
    } else if (oper === "*") {
        result = multiply(num1, num2);
    } else if ((oper === "/") && (num2 !== 0)) {
        result = divide(num1, num2);
    } else {
        alert("Enter basic math operator(+,-,*,/)");
    }
    
    return result;
}


/* Displaying output by pressing mouse */

window.addEventListener('click', function(e) {
    const paragraph = document.querySelector('p');
    let text = paragraph.textContent;
    let result, math_index;
    let decimal_num = /^-?[0-9]*\.?[0-9]+$/gm;
    let math_oper = /[\+\-\*\/]/;
    let oper_pos;
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
                break;
            case "Zero":
                    /* Adds one number before calculation */
                    if (text[0] === "0" && (!math_oper.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "0";
                    } else {
                        paragraph.textContent += "0";
                    }
                break;
            case "One":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "1";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "1";
                        }
                    } else {
                        paragraph.textContent += "1";
                    }

                break;
            case "Two":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "2";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "2";
                        }
                    } else {
                        paragraph.textContent += "2";
                    }
                break;
            case "Three":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "3";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "3";
                        }
                    } else {
                        paragraph.textContent += "3";
                    }
                break;
            case "Four":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "4";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "4";
                        }
                    } else {
                        paragraph.textContent += "4";
                    }
                break;
            case "Five":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "5";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "5";
                        }
                    } else {
                        paragraph.textContent += "5";
                    }          
                break;
            case "Six":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "6";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "6";
                        }
                    } else {
                        paragraph.textContent += "6";
                    }
                break;
            case "Seven":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "7";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "7";
                        }
                    } else {
                        paragraph.textContent += "7";
                    }
                break;
            case "Eight":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "8";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "8";
                        }
                    } else {
                        paragraph.textContent += "8";
                    }
                break;
            case "Nine":
                    if (text[0] === "0" && (!/[\+\-\*\/]/.test(text) && (!text.includes(".")))) {
                        paragraph.textContent = "9";
                    } else if (text.includes(".")) {
                        if (!/^-?[0-9]*\.?[0-9]+$/gm.test(text)){
                            paragraph.textContent += "9";
                        }
                    } else {
                        paragraph.textContent += "9";
                    }
                break;
            case "Plus":

                /* Add math operation if it doesn't exist or calculate if it does*/
                if (!/[\+\-\*\/]/.test(text)) {
                    paragraph.textContent += "+";
                } else if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text[text.length - 1])) {
                        paragraph.textContent += "+";
                        values = evaluation(text);
                        num1 = values[0];
                        num2 = values[2];
                        oper = values[1];
                        console.log(values);
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

                        /* Checking if any number is zero while using divide on it*/
                        if (num1 === 0 && num2 === 0) {
                            alert("Result is undefined");
                            paragraph.textContent = "0";
                        } else if (num2 === 0) {
                            alert("Cannot divide by zero");
                            paragraph.textContent = "0";
                        }
                        
                        /* Outputting result depending if its float or integer */
                        if ((num1 && num2) || (num1 === 0 && num2)) paragraph.textContent = operate(oper, num1, num2) + "+";
                    } 
                break;

            case "Minus":
                /* Add math operation if it doesn't exist or calculate if it does*/
                if (!/[\+\-\*\/]/.test(text)) {
                    paragraph.textContent += "-";
                } else if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text[text.length - 1]) || /^\d+\.\d{0, 2}$/.test(text)) {
                    
                        paragraph.textContent += "-";
                        values = evaluation(text);
                        num1 = values[0];
                        num2 = values[2];
                        oper = values[1];
                        console.log(values);
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

                        /* Checking if any number is zero while using divide on it*/
                        if (num1 === 0 && num2 === 0 && oper === "/") {
                            alert("Result is undefined");
                            paragraph.textContent = "0";
                        } else if (num2 === 0 && oper === "/") {
                            alert("Cannot divide by zero");
                            paragraph.textContent = "0";
                        }
                        
                        /* Outputting result depending if its float or integer */
                        if ((num1 && num2) || (num1 === 0 && num2)) paragraph.textContent = operate(oper, num1, num2) + "-";
                    }
                break;

            case "Multiply":
                /* Add math operation if it doesn't exist or calculate if it does*/
                if (!/[\+\-\*\/]/.test(text)) {
                    paragraph.textContent += "*";
                } else if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text[text.length - 1])) {
                        paragraph.textContent += "*";
                        values = evaluation(text);
                        num1 = values[0];
                        num2 = values[2];
                        oper = values[1];
                        
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

                        /* Checking if any number is zero while using divide on it*/
                        if (num1 === 0 && num2 === 0) {
                            alert("Result is undefined");
                            paragraph.textContent = "0";
                        } else if (num2 === 0) {
                            alert("Cannot divide by zero");
                            paragraph.textContent = "0";
                        }
                        console.log(num2);
                        /* Outputting result depending if its float or integer */
                        if ((num1 && num2) || (num1 === 0 && num2)) paragraph.textContent = operate(oper, num1, num2) + "*";
                    }
                break;

            case "Divide":
                /* Add math operation if it doesn't exist or calculate if it does*/
                if (!/[\+\-\*\/]/.test(text)) {
                    paragraph.textContent += "/";
                } else if (/[1-9]/.test(text[text.length - 1]) || /[0]/.test(text[text.length - 1])) {

                        paragraph.textContent += "/";
                        values = evaluation(text);
                        num1 = values[0];
                        num2 = values[2];
                        oper = values[1];
                        
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

                        /* Checking if any number is zero while using divide on it*/
                        if (num1 === 0 && num2 === 0) {
                            alert("Result is undefined");
                            paragraph.textContent = "0";
                        } else if (num2 === 0) {
                            alert("Cannot divide by zero");
                            paragraph.textContent = "0";
                        }

                        /* Outputting result depending if its float or integer */
                        if ((num1 && num2) || (num1 === 0 && num2)) {
                            result = operate(oper, num1, num2);
                            if (result.toString().includes(".")) {
                                paragraph.textContent = result.toFixed(1) + "/";
                            } else {
                                paragraph.textContent = result + "/";
                            }
                        } 
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
                
                /* Checking if any number is zero while using divide on it*/
                if (num1 === 0 && num2 === 0 && oper === "/") {
                    alert("Result is undefined");
                    paragraph.textContent = "0";
                } else if (num2 === 0 && oper === "/") {
                    alert("Cannot divide by zero");
                    paragraph.textContent = "0";
                }

                /* Outputting result depending if its float or integer */
                if (num1 && num2) {
                    result = operate(oper, num1, num2);
                    if (result.toString().includes(".")) {
                        paragraph.textContent = result.toFixed(2);
                    } else {
                        paragraph.textContent = result;
                    }
                }
            
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

