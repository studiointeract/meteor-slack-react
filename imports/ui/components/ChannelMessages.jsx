import React from 'react';
import Tracker from 'tracker-component';
import '../../api/messages/messages.js';
import MessagesList from './MessagesList.jsx';

class ChannelMessages extends Tracker.Component {
  constructor(props) {
    super(props);
    this.autorun(() => this.setState({
      messages: Messages.find({ channel: this.props.channel }).fetch()
    }));
  }

  render() {
    return <MessagesList {...this.state} />
  }
}
ChannelMessages.propTypes = {
  channel: React.PropTypes.string
};

export default ChannelMessages;
