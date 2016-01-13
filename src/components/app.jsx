import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Grid from './grid';
import IconButton from 'material-ui/lib/icon-button';

export default class App extends React.Component {
  constructor() {
    super();
  };

  handleAdd(){
    this.props.history.pushState(null, '/add/');
  };

  render() {
    return(
      <div>
        <AppBar title="Contact Manager" onRightIconButtonTouchTap={this.handleAdd.bind(this)} showMenuIconButton={false} iconClassNameRight="icon-add" />
        <div className="grid-container">
          <h1 className="header"> List of Contacts </h1>
          <Grid />
        </div>
      </div>
    )
  }
}
