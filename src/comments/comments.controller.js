import Comment from './comments.model.js';
import Post from '../posts/post.model.js';

export const createComment = async (req, res) => {
    try {
        const { postId, userName, content } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

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

export const getCommentsById = async (req, res) => {
    try {
        // Obtiene el ID del comentario de los parámetros de la URL
        const { id } = req.params;

        // Busca un comentario en la base de datos usando su _id
        const comment = await Comment.findById(id);

        // Si no se encuentra ningún comentario con esa ID
        if (!comment) {
            // Devuelve un estado 404 (No encontrado)
            return res.status(404).json({
                message: 'Comment not found'
            });
        }

        // Si se encuentra el comentario, devuélvelo con estado 200
        res.status(200).json({
            message: 'Comment fetched successfully',
            comment // Devuelve el objeto del comentario encontrado
        });

    } catch (error) {
        // Si ocurre un error durante el proceso
        res.status(500).json({
            message: 'Error fetching comment by id',
            error: error.message // Devuelve el mensaje de error técnico
        });
    }
};

export const updateCommentsById = async (req, res) => { 
    try {
        const { id } = req.params;
        const { content } = req.body;
        const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
        if (!comment) {
            return res.status(404).json({
                message: 'Comment not found'
            });
        }
        res.status(200).json({
            message: 'Comment updated successfully',
            comment
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating comment',
            error: error.message
        });
    }
};

export const deleteCommentsById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({
                message: 'Comment not found'
            });
        }
        res.status(200).json({
            message: 'Comment deleted successfully',
            comment
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting comment',
            error: error.message
        });
    }
};

export const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ postId });
        res.status(200).json({
            message: 'Comments fetched successfully',
            comments
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching comments by post id',
            error: error.message
        });
    }
};