"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUser = void 0;
const functions_1 = require("./src/functions");
function randomUser(genre, minAge, maxAge) {
    const name = `${(0, functions_1.randomFirstName)(genre)} ${(0, functions_1.randomLastName)()}`;
    const email = (0, functions_1.nameToEmail)(name);
    const age = (0, functions_1.randomAge)(minAge || 18, maxAge || 60);
    const birthDate = (0, functions_1.randomBirthDate)(age);
    const user = { name, email, age, birthDate };
    return user;
}
exports.randomUser = randomUser;
module.exports = { randomUser };
