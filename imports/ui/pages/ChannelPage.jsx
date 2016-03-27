import React from 'react';
import Tracker from 'tracker-component';

const ChannelPage = ({ channel }) => (
  <div className="channel">
    <header>
      <h1>{`#${channel}`}</h1>
    </header>
  </div>
);

export default ChannelPage;
