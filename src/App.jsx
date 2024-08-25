import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ThreadList from './ThreadList';
import CreateThread from './CreateThread';
import PostList from './PostList';
import './App.css';

const URL = 'https://railway.bulletinboard.techtrain.dev/threads?offset=1';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const data = await result.json();
        setThreads(data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="header-container">
        <h1>掲示板</h1>
        <Link to="/threads/new" className="create-thread-link">スレッドをたてる</Link>
      </div>
      <Routes>
        <Route path="/" element={<ThreadList threads={threads} />} />
        <Route path="/threads/new" element={<CreateThread setThreads={setThreads} />} />
        <Route path="/threads/:thread_id" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
