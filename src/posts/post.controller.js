import Post from './post.model.js';

export const createPost = async (req, res) => {
    try {
        const { title, description, course } = req.body;

        if (!title || !description || !course) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const post = await Post.create({
            title,
            description,
            course
        });

        res.status(201).json({
            message: 'Post created successfully',
            post
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error creating post',
            error: error.message
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post updated successfully',
            post
        });

    } catch (error) {
        res.status(500).json(
            {
                message: 'Error updating post',
                error: error.message
            }
        )
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post deleted successfully',
            post
        });

    } catch (error) {
        res.status(500).json(
            {
                message: 'Error deleting post',
                error: error.message
            }
        )
    }
}

export const getPostsByCourse = async (req, res) => {
    try {
        const { course } = req.params;
        const posts = await Post.find({ course });

        if (!posts || posts.length === 0) {
            return res.status(404).json({
                message: 'No posts found for this course'
            });
        }

        res.status(200).json({
            message: 'Posts fetched successfully',
            posts
        })
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error fetching posts by course',
                error: error.message
            }
        )
    }
}

export const getPostsById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);


        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post fetched successfully',
            post
        })
    } catch (error) {
        res.status(500).json(
            {
                message: 'Error fetching post by id',
                error: error.message
            }
        )
    }
}