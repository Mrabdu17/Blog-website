import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import EditPost from './pages/EditPost';

function App() {
    return (
        <Router>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/edit/:id" element={<EditPost />} /> {/* Fixed the issue here */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
