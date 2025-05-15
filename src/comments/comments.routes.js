import { Router } from 'express';
import { createComment } from './comments.controller.js';

const router = Router();

router.post(
    '/create',
    createComment
);

export default router;
