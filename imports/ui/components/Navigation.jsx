import Tracker from 'tracker-component';
import Channels from './Channels.jsx';

class Navigation extends Tracker.Component {
  constructor(props) {
    super(props);
    this.autorun(() => {
      this.setState({channels: Channels.find()})
    });
  }

  handleSelect(channel) {
    this.setState({ active: channel });
  }

  render() {
    let { channels = [], active = "general" } = this.state;
    return (
      <Channels channels={channels} active={active}
        handleSelect={this.handleSelect} />
    );
  }
}

export default Navigation;
