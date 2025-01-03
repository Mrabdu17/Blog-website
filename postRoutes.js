// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Make sure this is your Post model file

// Create a new post
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newPost = new Post({
      title,
      content,
    });

    await newPost.save();
    res.status(201).json(newPost); // Return the created post
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating post' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts); // Return all posts
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

module.exports = router;
