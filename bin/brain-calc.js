#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainCalc from '../src/games/calc.js';

runGame(brainCalc.gameDescription, brainCalc.getGameQuestionAndAnswer);
