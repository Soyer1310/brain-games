#! /usr/bin/env node
import index from '../src/index.js';
import brainCalc, { task } from '../src/games/brain-calc.js';

index(brainCalc, task);
