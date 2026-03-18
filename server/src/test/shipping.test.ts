import { calculateShipping } from "../utils/shipping";

const distanceCases = [
    // [distance, poids, type, attendu, description]

    [0, 5, "standard", 10, "Distance min (0km)"],
    [50, 5, "standard", 10, "Distance max tranche 1"],

    [51, 5, "standard", 25, "Début tranche 2"],
    [500, 5, "standard", 25, "Fin tranche 2"],

    [501, 5, "standard", 50, "Début tranche 3"],
    [1000, 5, "standard", 50, "Grande distance"],

    [10, 10, "standard", 15, "Poids = 10kg (+50%)"],
    [100, 20, "standard", 37.5, "Poids moyen (20kg)"],

    [10, 5, "express", 20, "Express sans majoration"],
    [100, 20, "express", 75, "Express avec majoration"],

];

const pairwiseCases = [
    // [distance, poids, type, attendu, description]

    [10, 5, "standard", 10, "D1-W1-T1"],   // courte, léger, standard
    [10, 20, "express", 30, "D1-W2-T2"],   // courte, lourd, express

    [100, 5, "express", 50, "D2-W1-T2"],   // moyenne, léger, express
    [100, 20, "standard", 37.5, "D2-W2-T1"], // moyenne, lourd, standard

    [600, 5, "standard", 50, "D3-W1-T1"],  // longue, léger, standard
    [600, 20, "express", 150, "D3-W2-T2"], // longue, lourd, express
];

test.each(distanceCases)(
    "%s",
    (distance, weight, type, expected) => {
        expect(calculateShipping(distance as number, weight as number, type as 'standard' | 'express')).toBe(expected);
    }
);

test.each(pairwiseCases)(
    "%s",
    (distance, weight, type, expected) => {
        expect(calculateShipping(distance as number, weight as number, type as 'standard' | 'express')).toBe(expected);
    }
);