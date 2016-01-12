import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Grid from './grid';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AppBar title="Contact Manager" showMenuIconButton={false} iconElementRight={<FlatButton label="Add" />} />
        <div>
          <h1> List of Contacts </h1>
          <Grid />
        </div>
      </div>
    )
  }
}
