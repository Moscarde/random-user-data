import {
	randomAge,
	randomFirstName,
	randomLastName,
	randomBirthDate,
	nameToEmail,
	randomPhone,
	processOptions
} from "./src/functions";

/**
 * Return user object { name, email, age, birthDate }
 * @param genre "m" for male names or "f" for female names
 * @param minAge Minimun Age
 * @param genre Maximun Age
 */
export function randomUser(options?: {
	genre?: "male" | "female";
	minAge?: number;
	maxAge?: number;
}) {
	const { genre, minAge, maxAge } = processOptions(options);

	const name = `${randomFirstName(genre)} ${randomLastName()}`;
	const email = nameToEmail(name);
	// console.log(minAge, maxAge)
	const age = randomAge(minAge || 18, maxAge || 60);
	const birthDate = randomBirthDate(age);
	const phone = randomPhone();

	const user = { name, email, age, birthDate, phone };

	return user;
}

module.exports = { randomUser };
