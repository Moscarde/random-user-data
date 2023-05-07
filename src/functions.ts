import { names } from "./names";
import { randomNumber } from "./utils";

export module Functions {
	/**
	 * Returns a random age
	 * @param minAge Minimun age
	 * @param maxAge Maximun age
	 */
	export function randomAge(minAge: number, maxAge: number):number {
		return Math.floor(Math.random() * (maxAge | 18 - minAge + 1)) + minAge;
	}

	/**
	 * Returns a random First name
	 * @param genre "m" for male names or "f" for female names
	 */
	export function randomFirstName(genre?: string) {
		if (!genre) {
			const randomPercent = Math.floor(Math.random() * 100);
			if (randomPercent > 50) {
				genre = "f";
			} else {
				genre = "m";
			}
		}

		if (genre === "m") {
			return names.brazilian.male[randomNumber()];
		} else if (genre === "f") {
			return names.brazilian.female[randomNumber()];
		}
	}

	/**
	 * Returns a random Last name
	 */
	export function randomLastName(): string {
		return names.brazilian.lastName[randomNumber()];
	}

	/**
	 * Returns a random birth date based on previous generated age
	 * @param age previous generated age
	 */
	export function randomBirthDate(age: number): string {
		let actualYear = new Date().getFullYear();
		let year = actualYear - age;
		let month = Math.floor(Math.random() * 12) + 1;
		let day = Math.floor(Math.random() * 30) + 1;
		return `${year}-${month}-${day}`;
	}

	export function nameToEmail(name: string): string {
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
	export function randomPhone(): string {
		return "(" + Math.floor(Math.random() * 99) + ")9" + Math.floor(Math.random() * 99999999);
	}
}

export const {
	randomAge,
	randomFirstName,
	randomLastName,
	randomBirthDate,
	nameToEmail,
	randomPhone
} = Functions;
