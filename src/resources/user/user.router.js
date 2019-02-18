import {Router} from "express";
import {index, store, login} from './user.controller';

const router = new Router();
// GET /api/user
router.get('/', index);
// POST /api/user
router.post('/', store);

router.post('/login', login);

export default router;