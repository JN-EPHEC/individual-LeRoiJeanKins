import { Router, type Request, type Response } from 'express';
import User from '../models/User.js';
import * as userController from "../controllers/userController";
import { checkIdParam } from "../middlewares/checkIdParam";

const router = Router();


/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Récupère la liste des utilisateurs
 *      tags: [Users]
 *      responses:
 *        200:
 *          description: Succès
 */
router.get('/', userController.getAllUsers);

router.post("/", async (req:Request, res:Response) => {
    const users = await User.create(req.body);
    res.json(users);
})
router.delete("/:id", checkIdParam, async (req:Request, res:Response) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({ message: `Utilisateur avec l'id ${req.params.id} a ete supp` });
});

export default router;