import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreadList from './ThreadList';
import CreateThread from './CreateThread';
import PostList from './PostList';
import Header from './Header'; // Import the Header component
import './App.css';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0'); // getting data from 0
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
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList threads={threads} />} />
        <Route path="/threads/new" element={<CreateThread setThreads={setThreads} />} />
        <Route path="/threads/:thread_id" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
