import React from 'react';
import { Link } from 'react-router-dom';

function ThreadList({ threads }) {
  return (
    <div className="container">
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} className="thread-item">
            <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreadList;
