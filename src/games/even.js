#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');
  
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            process.exit(0);
        }
  
        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
}

export default isEven