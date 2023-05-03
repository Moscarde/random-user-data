export declare module Functions {
    /**
     * Returns a random age
     * @param minAge Minimun age
     * @param maxAge Maximun age
     */
    function randomAge(minAge: number, maxAge: number): number;
    /**
     * Returns a random First name
     * @param genre "m" for male names or "f" for female names
     */
    function randomFirstName(genre?: string): string | undefined;
    /**
     * Returns a random Last name
     */
    function randomLastName(): string;
    /**
     * Returns a random birth date based on previous generated age
     * @param age previous generated age
     */
    function randomBirthDate(age: number): string;
    function nameToEmail(name: string): string;
}
export declare const randomAge: typeof Functions.randomAge, randomFirstName: typeof Functions.randomFirstName, randomLastName: typeof Functions.randomLastName, randomBirthDate: typeof Functions.randomBirthDate, nameToEmail: typeof Functions.nameToEmail;
