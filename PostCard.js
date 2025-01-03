// src/components/Postcard.js
import React from 'react';
import '../styles/Postcard.css'; // Make sure you're importing the correct CSS file

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="button-container">
        <button className="btn btn-primary">Create Post</button>
      </div>
    </div>
  );
};

export default PostCard;
