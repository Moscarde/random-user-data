"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOptions = exports.randomGender = exports.randomPhone = exports.nameToEmail = exports.randomBirthDate = exports.randomLastName = exports.randomFirstName = exports.randomAge = exports.Functions = void 0;
const names_1 = require("./names");
const utils_1 = require("./utils");
var Functions;
(function (Functions) {
    /**
     * Return default options { genre, minAge, maxAge }
     */
    function processOptions(options) {
        if (!options) {
            const newOptions = { genre: randomGender(), minAge: 18, maxAge: 60 };
            return newOptions;
        }
        if (!options.genre) {
            options.genre = randomGender();
        }
        if (!options.minAge) {
            options.minAge = 18;
        }
        if (!options.maxAge) {
            options.maxAge = 60;
        }
        const newOptions = {
            genre: options.genre,
            minAge: options.minAge,
            maxAge: options.maxAge
        };
        return newOptions;
    }
    Functions.processOptions = processOptions;
    /**
     * Returns a random age
     * @param minAge Minimun age
     * @param maxAge Maximun age
     */
    function randomAge(minAge, maxAge) {
        const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
        return age;
    }
    Functions.randomAge = randomAge;
    /**
     * Returns a random First name
     * @param genre "male" | "female"
     */
    function randomFirstName(genre) {
        if (genre === "male") {
            return names_1.names.brazilian.male[(0, utils_1.randomNumber)()];
        }
        else if (genre === "female") {
            return names_1.names.brazilian.female[(0, utils_1.randomNumber)()];
        }
    }
    Functions.randomFirstName = randomFirstName;
    /**
     * Returns a random gender
     */
    function randomGender() {
        if (Math.floor(Math.random() * 100) > 50) {
            return "male";
        }
        else {
            return "female";
        }
    }
    Functions.randomGender = randomGender;
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
        return ("(" +
            Math.floor(Math.random() * 99) +
            ")9" +
            Math.floor(Math.random() * 99999999));
    }
    Functions.randomPhone = randomPhone;
})(Functions = exports.Functions || (exports.Functions = {}));
exports.randomAge = Functions.randomAge, exports.randomFirstName = Functions.randomFirstName, exports.randomLastName = Functions.randomLastName, exports.randomBirthDate = Functions.randomBirthDate, exports.nameToEmail = Functions.nameToEmail, exports.randomPhone = Functions.randomPhone, exports.randomGender = Functions.randomGender, exports.processOptions = Functions.processOptions;
