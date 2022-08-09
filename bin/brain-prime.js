#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainPrime from '../src/games/prime.js';

runGame(brainPrime.gameDescription, brainPrime.getGameQuestionAndAnswer);
