
import { validateUserRegistration } from '../utils/userValidator';

describe('validateUserRegistration', () => {

    test('TC7: devrait lever une erreur si le rôle est invalide', () => {
        expect(() => validateUserRegistration(25, 'hacker', 'test@test.com')).toThrow("Rôle invalide");
    });

    test('TC6: devrait lever une erreur si l\'âge est > 120 (Limite haute franchie)', () => {
        expect(() => validateUserRegistration(121, 'user', 'test@test.com')).toThrow("Âge invalide");
    });

    test('TC4: devrait retourner false si l\'email ne contient pas de @', () => {
        expect(validateUserRegistration(50, 'user', 'invalidemail.com')).toBe(false);
    });

    test('TC5: devrait retourner false si l\'email ne contient pas de point', () => {
        expect(validateUserRegistration(120, 'stagiaire', 'nomail@test')).toBe(false);
    });

    test('TC2: devrait retourner false si l\'âge est < 18 et que le rôle n\'est pas stagiaire', () => {
        expect(validateUserRegistration(17, 'user', 'test@test.com')).toBe(false);
    });

    test('TC1: devrait retourner true si l\'âge est < 18 MAIS que le rôle est stagiaire', () => {
        expect(validateUserRegistration(17, 'stagiaire', 'test@test.com')).toBe(true);
    });

    test('TC3: devrait retourner true pour un utilisateur valide de 18 ans (Limite basse atteinte)', () => {
        expect(validateUserRegistration(18, 'admin', 'test@test.com')).toBe(true);
    });

    test('Devrait retourner true pour un utilisateur valide de 120 ans (Limite haute atteinte)', () => {
        expect(validateUserRegistration(120, 'user', 'test@test.com')).toBe(true);
    });
});