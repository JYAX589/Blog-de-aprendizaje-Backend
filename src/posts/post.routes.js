import { Router } from 'express';
import { createPost, updatePost, deletePost, getPostsByCourse} from './post.controller.js';

const router = Router()

router.post(
    '/create',
    createPost
);

router.put(
    '/update/:id',
    updatePost
);

router.delete(
    '/delete/:id',
    deletePost
);

router.get(
    '/course/:courseId',
    getPostsByCourse
)

export default router;