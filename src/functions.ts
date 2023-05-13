import { names } from "./names";
import { randomNumber } from "./utils";

export module Functions {
	interface Options {
		gender: "male" | "female";
		minAge: number;
		maxAge: number;
	}
	/**
	 * Return processed options { genre, minAge, maxAge }
	 */
	export function processOptions(
		options?: { gender?: "male" | "female"; minAge?: number; maxAge?: number }
	): Options {
		const defaultOptions: Options = {
			gender: randomGender(),
			minAge: 18,
			maxAge: 60,
		  };

		const newOptions: Options = {
			gender: options?.gender || defaultOptions.gender,
			minAge: options?.minAge || defaultOptions.minAge,
			maxAge: options?.maxAge || defaultOptions.maxAge,
		}
		return newOptions;
	}

	/**
	 * Returns a random age
	 * @param minAge Minimun age
	 * @param maxAge Maximun age
	 */
	export function randomAge(minAge: number, maxAge: number): number {
		const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
		return age;
	}

	/**
	 * Returns a random First name
	 * @param genre "male" | "female"
	 */
	export function randomFirstName(genre: "male" | "female") {
		if (genre === "male") {
			return names.brazilian.male[randomNumber()];
		} else if (genre === "female") {
			return names.brazilian.female[randomNumber()];
		}
	}

	/**
	 * Returns a random gender
	 */
	export function randomGender(): "male" | "female" {
		if (Math.floor(Math.random() * 100) > 50) {
			return "male";
		} else {
			return "female";
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
		return (
			"(" +
			Math.floor(Math.random() * 99) +
			")9" +
			Math.floor(Math.random() * 99999999)
		);
	}
}

export const {
	randomAge,
	randomFirstName,
	randomLastName,
	randomBirthDate,
	nameToEmail,
	randomPhone,
	randomGender,
	processOptions
} = Functions;
