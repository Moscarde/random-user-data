import {
	randomAge,
	randomFirstName,
	randomLastName,
	randomBirthDate,
	nameToEmail
} from "./src/functions";

interface Person {
	name: string;
	email: string;
	age: number;
	birthDate: string;
}

export function randomUser(
	genre?: string,
	minAge?: number,
	maxAge?: number
): Person {
	const name = `${randomFirstName(genre)} ${randomLastName()}`;
	const email = nameToEmail(name);
	const age = randomAge(minAge || 18, maxAge || 60);
	const birthDate = randomBirthDate(age);

	const user: Person = { name, email, age, birthDate };

	return user;
}

module.exports = { randomUser };
