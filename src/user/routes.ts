import { Router } from 'express'
import { CgetUsers,CgetUserById,CaddUser,CdeleteUser } from './controller'

export const router = Router();

router.get('/', CgetUsers);
router.get("/:id", CgetUserById);
router.post("/", CaddUser);
router.delete("/:id", CdeleteUser);