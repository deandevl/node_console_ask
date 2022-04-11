/**
 * Created by Rick on 2021-06-10.
 */
'use strict';

const readline = require("readline");

const ask_question = (rl, question) => {
  return new Promise(resolve => {
    rl.question(question, (answer) => {
      resolve(answer);
    })
  })
}

/*
* Displays sequentially at the console an array of questions
* and records their corresponding console submitted answers.
* The function returns a Promise object which if successful
* its handler function parameter is assigned the array of answers.
* @param {string array} questions
* @return {Promise object}
* */
const node_console_ask = function(questions){
  return new Promise(async resolve => {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let results = [];
    for(let i=0; i<questions.length; i++){
      const result = await ask_question(rl, questions[i] + " ");
      results.push(result);
    }
    rl.close();
    resolve(results);
  })
}

module.exports = node_console_ask;

