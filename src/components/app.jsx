import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Grid from './grid';
import IconButton from 'material-ui/lib/icon-button';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import dialogActions from '../actions/dialog';
import AddDialog from './addDialog';
import DeleteDialog from './deleteDialog';

const mapStateToProps = (state) => ({
    contacts: state.dialog.contacts,
    deleteDialog : state.dialog.deleteDialog,
    addDialog : state.dialog.addDialog,
    editingContact : state.dialog.editingContact
});

const mapDispatchToProps = (dispatch) => ({
  dialogActions : bindActionCreators(dialogActions, dispatch)
});

export default class ContactManagerView extends React.Component {
  constructor() {
    super();
    // ToDo : bind methods here , propType entries
  };

  handleAdd(){
    this.props.dialogActions.showAddDialog();
    // this.props.history.pushState(null, '/add/');
  };

  // handleCloseDialog = () => {
  //   this.props.dialogActions.closeDeleteDialog();
  // };

  // handleDeleteConfirmed = () => {
  //   this.props.dialogActions.deleteConfirmed();
  // };

  handleShowDialog = (id) => {
    this.props.dialogActions.showDeleteDialog(id);
  };

  handleShowAddDialog = (id) => {
    this.props.dialogActions.showAddDialog(id);
  };

  render() {

    return(
      <div>
        <AppBar title="Contact Manager" onRightIconButtonTouchTap={this.handleAdd.bind(this)} showMenuIconButton={false} iconClassNameRight="icon-add" />
        <div className="grid-container">
          <h1 className="header"> List of Contacts </h1>
          <Grid contacts={this.props.contacts} onDeleteDialog={this.handleShowDialog.bind(this)} onEditDialog={this.handleShowAddDialog.bind(this)} />
          <DeleteDialog deleteDialog={this.props.deleteDialog} dialogActions={this.props.dialogActions} />
          <AddDialog addDialog={this.props.addDialog} dialogActions={this.props.dialogActions} editingContact={this.props.editingContact} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManagerView);

