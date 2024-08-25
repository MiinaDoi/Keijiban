import React from 'react';
import { Link } from 'react-router-dom';

function ThreadList({ threads }) {
  return (
    <div className="container">
      <h2>新着スレッド</h2>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreadList;
