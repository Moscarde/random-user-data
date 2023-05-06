"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
/** Returns a random number from 0 to 100, where 100 is the length of the names arrays. */
function randomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.randomNumber = randomNumber;
