import { Router } from 'express';
import { createUser, getAllUsers, getUser } from './user.controllers';

const router = Router();
router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
export default router;
