import { Router, type Request, type Response } from 'express';
import User from '../models/User.js';

const router = Router();

router.get("/", async (req:Request, res:Response) => {
    const users = await User.findAll();
    res.status(200).json(users);
});
router.post("/", async (req:Request, res:Response) => {
    const users = await User.create(req.body);
    res.json(users);
})
router.delete("/:id", async (req:Request, res:Response) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({ message: `Utilisateur avec l'id ${req.params.id} a ete supp` });
});

export default router;