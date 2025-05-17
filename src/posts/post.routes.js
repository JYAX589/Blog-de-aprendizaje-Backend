import { Router } from 'express';
import { createPost, updatePost, deletePost, getPostsByCourse, getPostsById, getPosts} from './post.controller.js';

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
    '/course/:course',
    getPostsByCourse
)

router.get(
    '/:id',
    getPostsById
)

router.get(
    '/',
    getPosts
)


export default router;