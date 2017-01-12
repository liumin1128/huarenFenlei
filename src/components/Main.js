require('normalize.css/normalize.css');
require('styles/reset.css');
require('styles/app.scss');
require('styles/slider.scss');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Alert from '../components/Ui/ModalAlert/containers'
const muiTheme = getMuiTheme({
  fontFamily: 'PingFangSC-Light',
  appBar: {
    color: 'rgba(0,0,0,0)',
    height: 45,
    padding: 20
  },
  palette: {
    primary1Color: '#58cc7c'
  }
});

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
            {children}
            <Alert />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = {
};

export default App;
