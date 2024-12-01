#!/usr/bin/env node
import sayHello from '../src/cli.js';
import getUserName from '../src/get-user-name.js';

console.log('Welcome to the Brain Games!');
sayHello(getUserName());
