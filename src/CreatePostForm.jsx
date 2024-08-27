import React, { useState } from 'react';

function CreatePostForm({ thread_id, fetchPosts }) {
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = async () => {
    if (newPost.trim() === '') {
      alert('投稿内容を入力してください');
      return;
    }
  
    const POST_URL = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`;
    try {
      const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: newPost }), // Sending the post content to the server
      });
  
      if (response.ok) {
        await fetchPosts(); // Re-fetch posts from the server after submission and wait for it to complete**
        setNewPost(''); // Clear the input field after the posts are updated
      } else {
        alert('投稿に失敗しました');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('エラーが発生しました。再度お試しください。');
    }
  };  

  return (
    <div className="post-form">
      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="What is happening?!"
      />
      <button onClick={handlePostSubmit} className="button">Post</button>
    </div>
  );
}

export default CreatePostForm;
