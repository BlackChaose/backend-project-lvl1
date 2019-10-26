#!/usr/bin/env node
const hiFunc = () => {
  console.log('Welcome to the Brain Games!');
};

hiFunc();

import { whatsName, question } from '..';
const userName = whatsName();
export { hiFunc };
