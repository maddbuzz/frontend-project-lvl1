#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainGCD from '../src/games/gcd.js';

runGame(brainGCD.gameDescription, brainGCD.getGameQuestionAndAnswer);
