#!/usr/bin/env node
import sayHello from '../src/cli.js';
import brainEven, { task } from '../src/brain-even.js';
import getUserName from '../src/get-user-name.js';
import playGame from '../src/playGame.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
sayHello(userName);
playGame(brainEven, userName, task);
