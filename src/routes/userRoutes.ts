import express from 'express';

const router = express.Router();
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

router.get("/", (req:object, res:object) => {
    res.json(users);
});

export default router;