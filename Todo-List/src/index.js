"use strict";

import { formatDistance, subDays } from 'date-fns';
import './style.css';

import control from './controller/control';
import build from './builder/build';

console.log(build.domElement('div', 'div', 'div'))
