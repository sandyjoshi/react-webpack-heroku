import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Grid from './grid';
import IconButton from 'material-ui/lib/icon-button';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    contacts: state.grid.contacts
});

export default class ContactManagerView extends React.Component {
  constructor() {
    super();
    // ToDo : bind methods here , propType entries
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
          <Grid contacts={this.props.contacts} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {})(ContactManagerView);

