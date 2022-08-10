#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameDescription, getGameQuestionAndAnswer } from '../src/games/calc.js';

runGame(gameDescription, getGameQuestionAndAnswer);
