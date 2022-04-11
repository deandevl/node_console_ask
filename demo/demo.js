/**
 * Created by Rick on 2021-06-13.
 */
'use strict';
const node_console_ask = require("node_console_ask");

/*
* Submit an array of 3 questions and receive a Promise
* object whose handler function receives and array of
* answers.  Display the answers to the console.
* */

node_console_ask([
  "What is your name?",
  "How old are you?",
  "Name of your city/town?"
]).then(answers => {
  console.log(answers);
})