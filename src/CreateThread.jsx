import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CREATE_THREAD_URL = 'https://railway.bulletinboard.techtrain.dev/threads';

function CreateThread({ setThreads }) {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleCreateThread = async () => {
    if (title.trim() === '') {// .trim reject empty response + ignore the blank spaces btw ans
      alert('タイトルを入力してください');
      return;
    }

    try {
      const response = await fetch(CREATE_THREAD_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        const newThread = await response.json();
        setThreads(prevThreads => [...prevThreads, newThread]);
        navigate('/'); // Navigate back to the thread list
      } else {
        alert('スレッドの作成に失敗しました');
      }
    } catch (error) {
      console.error('Error creating thread:', error);
      alert('エラーが発生しました。再度お試しください。');
    }
  };

  return (
    <div className="container">
      <h2>スレッドをたてる</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="スレッドのタイトル"
      />
      <button onClick={handleCreateThread}>作成</button>
    </div>
  );
}

export default CreateThread;
