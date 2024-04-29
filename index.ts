#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreen.black("\n\t\t<<---  CLI Based Word Counter  --->>"));


const answer = await inquirer.prompt
([
    {
        name : 'sentence',
        type : 'input',
        message : (chalk.red('Enter yours paragraph or words  to count'))
    }
])
const words = answer.sentence.trim().split(" ")
console.log(words);

console.log(words.length);