const Post = require('../models/Post');

// Get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
};

// Get post by ID
const getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author', 'username');

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

// Create new post
const createPost = async (req, res) => {
    const { title, content, image } = req.body;

    const post = new Post({
        title,
        content,
        image,
        author: req.user.id,
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
};

// Update post
const updatePost = async (req, res) => {
    const { title, content, image } = req.body;

    const post = await Post.findById(req.params.id);

    if (post.author.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    if (post) {
        post.title = title || post.title;
        post.content = content || post.content;
        post.image = image || post.image;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

// Delete post
const deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post.author.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    if (post) {
        await post.deleteOne();
        res.json({ message: 'Post removed' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
