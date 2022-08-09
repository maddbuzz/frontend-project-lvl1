#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainEven from '../src/games/even.js';

runGame(brainEven.gameDescription, brainEven.getGameQuestionAndAnswer);
