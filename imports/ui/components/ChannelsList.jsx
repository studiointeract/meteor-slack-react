import React from 'react';

const ChannelsList = ({ channels, active }) => (
  <ul className="channels">
    {channels.map((channel, i) =>
       <li key={i}>
         <a href={`/${channel._id}`}
            className={channel._id == active ? "active" : ""}>{channel.name}</a>
       </li>
    )}
  </ul>
);

export default ChannelsList;
