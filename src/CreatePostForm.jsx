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
        setNewPost(''); // Clear the input field
        fetchPosts(); // Re-fetch posts from the server after submission
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
      <h3>新しい投稿を追加</h3>
      <textarea
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="投稿内容を入力してください"
      />
      <button onClick={handlePostSubmit}>投稿する</button>
    </div>
  );
}

export default CreatePostForm;
