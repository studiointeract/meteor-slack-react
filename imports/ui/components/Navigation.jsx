import React from 'react';
import Tracker from 'tracker-component';
import ChannelsList from './ChannelsList.jsx';
import '../../api/channels/channels.js';

class Navigation extends Tracker.Component {
  constructor(props) {
    super(props);
    this.autorun(() => {
      this.setState({channels: Channels.find().fetch()})
    });
  }

  handleSelect(channel) {
    this.setState({ active: channel });
  }

  render() {
    let { channels = [], active = "general" } = this.state;
    let selectChannel = this.handleSelect.bind(this);
    return (
      <ChannelsList channels={channels} active={active}
        handleSelect={selectChannel} />
    );
  }
}

export default Navigation;
