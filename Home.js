// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import PostCard from '../components/PostCard';
import '../styles/Home.css';  // Update the path to match the new folder structure

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  const handleEdit = () => {
    // Handle post editing if needed
  };

  return (
    <div className="home-container">
      <h1>Latest Posts</h1>
      {posts.length > 0 ? (
        <div className="post-list">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      ) : (
        <p className="no-posts">No posts available</p>
      )}
    </div>
  );
};

export default Home;
