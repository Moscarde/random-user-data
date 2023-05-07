"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPhone = exports.nameToEmail = exports.randomBirthDate = exports.randomLastName = exports.randomFirstName = exports.randomAge = exports.Functions = void 0;
const names_1 = require("./names");
const utils_1 = require("./utils");
var Functions;
(function (Functions) {
    /**
     * Returns a random age
     * @param minAge Minimun age
     * @param maxAge Maximun age
     */
    function randomAge(minAge, maxAge) {
        return Math.floor(Math.random() * (maxAge | 18 - minAge + 1)) + minAge;
    }
    Functions.randomAge = randomAge;
    /**
     * Returns a random First name
     * @param genre "m" for male names or "f" for female names
     */
    function randomFirstName(genre) {
        if (!genre) {
            const randomPercent = Math.floor(Math.random() * 100);
            if (randomPercent > 50) {
                genre = "f";
            }
            else {
                genre = "m";
            }
        }
        if (genre === "m") {
            return names_1.names.brazilian.male[(0, utils_1.randomNumber)()];
        }
        else if (genre === "f") {
            return names_1.names.brazilian.female[(0, utils_1.randomNumber)()];
        }
    }
    Functions.randomFirstName = randomFirstName;
    /**
     * Returns a random Last name
     */
    function randomLastName() {
        return names_1.names.brazilian.lastName[(0, utils_1.randomNumber)()];
    }
    Functions.randomLastName = randomLastName;
    /**
     * Returns a random birth date based on previous generated age
     * @param age previous generated age
     */
    function randomBirthDate(age) {
        let actualYear = new Date().getFullYear();
        let year = actualYear - age;
        let month = Math.floor(Math.random() * 12) + 1;
        let day = Math.floor(Math.random() * 30) + 1;
        return `${year}-${month}-${day}`;
    }
    Functions.randomBirthDate = randomBirthDate;
    function nameToEmail(name) {
        let email = name
            .replace(" ", "")
            .toLowerCase()
            .replace(/[ç]/g, "c")
            .replace(/[ã]/g, "a")
            .replace(/[é]/g, "e")
            .replace(/[ô]/g, "o")
            .replace(/[í]/g, "i")
            .replace(/[ú]/g, "u")
            .concat("@email.com");
        // const corrigido = texto.replace(/[çÇ]/g, 'c').replace(/[ãÃ]/g, 'a');
        return email;
    }
    Functions.nameToEmail = nameToEmail;
    function randomPhone() {
        return "(" + Math.floor(Math.random() * 99) + ")9" + Math.floor(Math.random() * 99999999);
    }
    Functions.randomPhone = randomPhone;
})(Functions = exports.Functions || (exports.Functions = {}));
exports.randomAge = Functions.randomAge, exports.randomFirstName = Functions.randomFirstName, exports.randomLastName = Functions.randomLastName, exports.randomBirthDate = Functions.randomBirthDate, exports.nameToEmail = Functions.nameToEmail, exports.randomPhone = Functions.randomPhone;
