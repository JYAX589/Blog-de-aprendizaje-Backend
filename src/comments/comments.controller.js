import Comment from './comments.model.js';
import Post from '../posts/post.model.js';

export const createComment = async (req, res) => {
    try {
        const { postId, userName, content } = req.body;

        // Check if the post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        // Create the comment
        const comment = await Comment.create({
            postId,
            userName,
            content
        });

        res.status(201).json({
            message: 'Comment created successfully',
            comment
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating comment',
            error: error.message
        });
    }
}

