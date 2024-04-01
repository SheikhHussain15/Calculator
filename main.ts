#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer : {
    numberOne: number
    numberTwo: number
    operator : string
} = await inquirer.prompt([
    {   type: "number",
        name: "numberOne",
        message: "Enter a first Number One",
    },
    {   type: "number",
        name: "numberTwo",
        message: "Enter a Second Number ",
    },
    {   type: "list",
        name: "operator",
        message: "Enter an Operator",
        choices: ["+", "-", "*", "/"]}
])

const { numberOne, numberTwo, operator } = answer;

let result
 switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":   
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
        default:
            console.log("Invalid operator")
        break;
 }
 console.log(`${numberOne} ${numberTwo} ${operator} = ${result}`);
 



