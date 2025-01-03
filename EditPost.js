import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Update this line

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();  // Use navigate hook
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        // Fetch the post by id
        const fetchPost = async () => {
            const response = await fetch(`/api/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPost = {
            title: post.title,
            content: post.content,
        };

        // Send update request
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPost),
        });

        if (response.ok) {
            // Use navigate to redirect after the update
            navigate(`/post/${id}`); // Navigate to the updated post detail page
        }
    };

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    placeholder="Title"
                />
                <textarea
                    value={post.content}
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    placeholder="Content"
                />
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
