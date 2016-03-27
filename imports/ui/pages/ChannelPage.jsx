import React from 'react';
import MessageForm from '../components/MessageForm.jsx';
import ChannelMessages from '../components/ChannelMessages.jsx';

const ChannelPage = ({ channel }) => (
  <div className="channel">
    <header>
      <h1>{`#${channel}`}</h1>
    </header>
    <ChannelMessages channel={channel} />
    <MessageForm channel={channel} />
  </div>
);

export default ChannelPage;
