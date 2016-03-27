import React from 'react';

const ChannelPage = ({ channel }) => (
  <div className="channel">
    <header>
      <h1>{`#${channel}`}</h1>
    </header>
  </div>
);

export default ChannelPage;
