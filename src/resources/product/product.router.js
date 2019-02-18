import {Router} from "express";
import {index, store} from './product.controller';

const router = new Router();
// GET /api/user
router.get('/', index);
// POST /api/user
router.post('/', store);

export default router;