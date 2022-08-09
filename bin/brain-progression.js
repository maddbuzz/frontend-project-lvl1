#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainProgression from '../src/games/progression.js';

runGame(brainProgression.gameDescription, brainProgression.getGameQuestionAndAnswer);
