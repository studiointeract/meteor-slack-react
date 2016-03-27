import React from 'react';

const Channels = ({ channels, active, handleSelect }) => (
  <ul className="channels">
    {channels.map(channel =>
       <li onClick={handleSelect}>
         <a href={`/${channel._id}`}
            className={channel._id == active ? "active" : ""}>{channel.name}</a>
       </li>
    )}
  </ul>
);
