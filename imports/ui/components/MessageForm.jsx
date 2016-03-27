import React from 'react';
import ContentEditable from 'react-contenteditable';
import '../../api/messages/messages.js';

class MessageForm extends React.Component {
  handleChange(evt) {
    if (!evt.shiftKey && evt.keyCode == 13) {
      evt.preventDefault();
      let text = evt.target.innerText;
      evt.target.innerHTML = "";
      Messages.insert({ message: text, channel: this.props.channel });
    }
  }

  render() {
    return <ContentEditable html="" onKeyDown={this.handleChange.bind(this)} />;
  }
}
MessageForm.propTypes = {
  channel: React.PropTypes.string
};

export default MessageForm;
