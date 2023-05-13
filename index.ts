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
 * Return user object { name, email, age, birthDate, phone }
 * @param gender "male" for male names or "female" for female names
 * @param minAge Minimun Age
 * @param genre Maximun Age
 */
export function randomUser(options?: {
	genre?: "male" | "female";
	minAge?: number;
	maxAge?: number;
}) {
	const { gender, minAge, maxAge } = processOptions(options);

	const name = `${randomFirstName(gender)} ${randomLastName()}`;
	const email = nameToEmail(name);
	const age = randomAge(minAge, maxAge);
	const birthDate = randomBirthDate(age);
	const phone = randomPhone();

	const user = { name, email, age, birthDate, phone };

	return user;
}

module.exports = { randomUser };
