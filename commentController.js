const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Get comments by post
const getComments = async (req, res) => {
    const comments = await Comment.find({ post: req.params.postId }).populate('author', 'username');
    res.json(comments);
};

// Create new comment
const createComment = async (req, res) => {
    const { content } = req.body;
    const postExists = await Post.findById(req.params.postId);

    if (!postExists) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const comment = new Comment({
        content,
        author: req.user.id,
        post: req.params.postId,
    });

    const createdComment = await comment.save();
    res.status(201).json(createdComment);
};

// Delete comment
const deleteComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (comment) {
        if (comment.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await comment.deleteOne();
        res.json({ message: 'Comment removed' });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
};

module.exports = { getComments, createComment, deleteComment };
