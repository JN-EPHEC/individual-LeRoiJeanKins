export type ValidRole = "admin" | "user" | "stagiaire";

export function validateUserRegistration(age: number, role: string, email: string): boolean {
    const validRoles: ValidRole[] = ["admin", "user", "stagiaire"];
    if (!validRoles.includes(role as ValidRole)) {
        throw new Error("Rôle invalide");
    }

    if (age > 120) {
        throw new Error("Âge invalide");
    }

    if (!email.includes('@') || !email.includes('.')) {
        return false;
    }

    if (age < 18) {
        if (role === "stagiaire") {
            return true;
        }
        return false;
    }

    return true;
}