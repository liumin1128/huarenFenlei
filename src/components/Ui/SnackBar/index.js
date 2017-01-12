import React from 'react'
import Snackbar from 'material-ui/Snackbar';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: 'message'
    }
    this.handleRequestClose = () => {
      this.setState({
        open: false
      });
    }
  }
  render () {
    return (
      <Snackbar
        open={this.state.open}
        message={this.state.message}
        autoHideDuration={3000}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}
export default Component
