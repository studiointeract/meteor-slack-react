import React from 'react';

const MessagesList = ({ messages = [] }) => (
  <ul className="messages">
    {messages.map((message, i) =>
      <li key={i}>
        <div className="message">{message.message}</div>
      </li>
    )}
  </ul>
);

export default MessagesList;
