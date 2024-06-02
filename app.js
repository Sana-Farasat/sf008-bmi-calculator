#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagentaBright("\n\t\t ~~Your Body Mass Index~~ \n"));
//Using inquirer to take input from user and stroing user's input in a variable
let answer = await inquirer.prompt([
    {
        name: 'height',
        type: 'number',
        message: chalk.magentaBright('\n Enter your height in meters(m):')
    },
    {
        name: 'weight',
        type: 'number',
        message: chalk.magentaBright('\n Enter your weight in kilogram(kg):')
    }
]);
//Now performing calculation to see body mass index 
let bmi = answer.weight / (answer.height * answer.height);
//Making round to bmi value to two digits after decimal
let rounded_bmi = parseFloat(bmi.toFixed(2));
//Finally console to see output on cli
console.log(chalk.magentaBright('\n Your height is ' + answer.height));
console.log(chalk.magentaBright('\n Your weight is ' + answer.weight));
console.log(chalk.magentaBright(`\n Your body mass index is ${rounded_bmi}`));
console.log(chalk.bgMagentaBright("\n\t\t\t ..The End... \n"));
