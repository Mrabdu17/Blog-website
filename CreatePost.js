import React, { useState } from 'react';
import axios from '../axiosConfig'; // Ensure correct axiosConfig import
import '../styles/CreatePost.css'; 

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      console.error('Title and content are required');
      return;
    }

    try {
      const response = await axios.post('/api/posts', { title, content });
      console.log('Post Created:', response.data);
      // Redirect or update the UI to reflect the newly created post
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
