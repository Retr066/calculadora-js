'use strict';
import { View } from './view.js';
import { Toogle } from './toogle.js';
function run() {
    const view = new View();
    const toogle = new Toogle();
    toogle.setView(view);
    view.setToogle(toogle);
    view.render();
}

document.addEventListener('DOMContentLoaded', run);
