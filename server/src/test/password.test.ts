import { validatePassword } from "../utils/password";
describe("Password Validator - White Box Testing", () => {
// Test initial pour initialiser le rapport de couverture
// Ce test ne couvre que la première ligne de la fonction (Branch 1)
    it("devrait rejeter un mot de passe vide", () => {
        const result = validatePassword("", 25);
        expect(result).toBe(false);
    });

    describe("Password Validator - White Box Testing", () => {

        it("devrait rejeter un mot de passe vide (Branch 1)", () => {
            expect(validatePassword("", 25)).toBe(false);
        });

        it("devrait rejeter un mot de passe trop court (Branch 2)", () => {
            expect(validatePassword("Ab1", 25)).toBe(false);
        });

        it("devrait rejeter un mot de passe trop long (Branch 3)", () => {
            expect(validatePassword("A".repeat(21), 25)).toBe(false);
        });

        // 🔹 ENFANT (< 12)
        it("enfant sans minuscule → rejet (Branch 4)", () => {
            expect(validatePassword("PASSWORD1!", 10)).toBe(false);
        });

        it("enfant valide → accepté", () => {
            expect(validatePassword("password", 10)).toBe(true);
        });

        // 🔹 ADULTE (12 - 64)
        it("adulte sans majuscule → rejet (Branch 5)", () => {
            expect(validatePassword("password1!", 25)).toBe(false);
        });

        it("adulte sans chiffre → rejet (Branch 5)", () => {
            expect(validatePassword("Password!", 25)).toBe(false);
        });

        it("adulte sans caractère spécial → rejet (Branch 6)", () => {
            expect(validatePassword("Password1", 25)).toBe(false);
        });

        it("adulte valide → accepté", () => {
            expect(validatePassword("Password1!", 25)).toBe(true);
        });

        // 🔹 SENIOR (>= 65)
        it("senior sans chiffre ET sans majuscule → rejet (Branch 7)", () => {
            expect(validatePassword("password!", 70)).toBe(false);
        });

        it("senior avec majuscule → accepté", () => {
            expect(validatePassword("Password!", 70)).toBe(true);
        });

        it("senior avec chiffre → accepté", () => {
            expect(validatePassword("password1!", 70)).toBe(true);
        });

    });
});
