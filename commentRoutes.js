const express = require('express');
const router = express.Router();
const { createComment, getComments, deleteComment } = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/:postId').get(getComments).post(protect, createComment);
router.route('/:id').delete(protect, deleteComment);

module.exports = router;
