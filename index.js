"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUser = void 0;
const functions_1 = require("./src/functions");
/**
 * Return user object { name, email, age, birthDate, phone }
 * @param gender "male" for male names or "female" for female names
 * @param minAge Minimun Age
 * @param genre Maximun Age
 */
function randomUser(options) {
    const { gender, minAge, maxAge } = (0, functions_1.processOptions)(options);
    const name = `${(0, functions_1.randomFirstName)(gender)} ${(0, functions_1.randomLastName)()}`;
    const email = (0, functions_1.nameToEmail)(name);
    const age = (0, functions_1.randomAge)(minAge, maxAge);
    const birthDate = (0, functions_1.randomBirthDate)(age);
    const phone = (0, functions_1.randomPhone)();
    const user = { name, email, age, birthDate, phone };
    return user;
}
exports.randomUser = randomUser;
module.exports = { randomUser };
