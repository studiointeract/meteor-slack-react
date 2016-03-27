import React from 'react';

const ChannelsList = ({ channels, active, handleSelect }) => (
  <ul className="channels">
    {channels.map((channel, i) =>
       <li onClick={handleSelect} key={i}>
         <a href={`/${channel._id}`}
            className={channel._id == active ? "active" : ""}>{channel.name}</a>
       </li>
    )}
  </ul>
);

export default ChannelsList;
