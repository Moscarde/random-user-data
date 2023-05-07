import {
	randomAge,
	randomFirstName,
	randomLastName,
	randomBirthDate,
	nameToEmail,
	randomPhone
} from "./src/functions";

interface Person {
	name: string;
	email: string;
	age: number;
	birthDate: string;
}

/**
 * Return user object { name, email, age, birthDate }
 * @param genre "m" for male names or "f" for female names
 * @param minAge Minimun Age
 * @param genre Maximun Age
 */
export function randomUser(
	genre?: string,
	minAge?: number,
	maxAge?: number
) {
	const name = `${randomFirstName(genre)} ${randomLastName()}`;
	const email = nameToEmail(name);
	// console.log(minAge, maxAge)
	const age = randomAge(minAge || 18, maxAge || 60);
	const birthDate = randomBirthDate(age);
	const phone = randomPhone()

	const user = { name, email, age, birthDate, phone };

	return user;
}

module.exports = { randomUser };
