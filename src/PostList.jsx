import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreatePostForm from './CreatePostForm'; // Import the CreatePostForm component

function PostList() {
  const { thread_id } = useParams(); // Get thread ID from the URL
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount and when thread_id changes
  }, [thread_id]);

  const fetchPosts = async () => {
    const API_URL = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=1`;
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data.posts); // Always set posts from server response
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="container">
      <CreatePostForm thread_id={thread_id} fetchPosts={fetchPosts} /> {/* Post form at the top */}
      <h2>スレッドの投稿一覧</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <p>{post.post}</p> {/* Display the 'post' content */}
            </li>
          ))
        ) : (
          <p>投稿がありません。</p>
        )}
      </ul>
    </div>
  );
}

export default PostList;
