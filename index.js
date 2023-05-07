"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUser = void 0;
const functions_1 = require("./src/functions");
/**
 * Return user object { name, email, age, birthDate }
 * @param genre "m" for male names or "f" for female names
 * @param minAge Minimun Age
 * @param genre Maximun Age
 */
function randomUser(genre, minAge, maxAge) {
    const name = `${(0, functions_1.randomFirstName)(genre)} ${(0, functions_1.randomLastName)()}`;
    const email = (0, functions_1.nameToEmail)(name);
    // console.log(minAge, maxAge)
    const age = (0, functions_1.randomAge)(minAge || 18, maxAge || 60);
    const birthDate = (0, functions_1.randomBirthDate)(age);
    const phone = (0, functions_1.randomPhone)();
    const user = { name, email, age, birthDate, phone };
    return user;
}
exports.randomUser = randomUser;
module.exports = { randomUser };
