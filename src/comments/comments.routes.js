import { Router } from 'express';
import { createComment, getCommentsById, updateCommentsById, deleteCommentsById, getCommentsByPostId } from './comments.controller.js';

const router = Router();

router.post(
    '/create',
    createComment
);

router.get(
    '/get/:id',
    getCommentsById
)

router.put(
    '/update/:id',
    updateCommentsById
)

router.delete(
    '/delete/:id',
    deleteCommentsById
)

router.get(
    '/post/:postId',
    getCommentsByPostId
)
export default router;
