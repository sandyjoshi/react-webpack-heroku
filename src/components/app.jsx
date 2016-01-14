import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
// import Grid from './grid';
import IconButton from 'material-ui/lib/icon-button';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import dialogActions from '../actions/dialog';
import AddDialog from './addDialog';
import DeleteDialog from './deleteDialog';
import ContactItem from './contactItem';


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
    this.handleShowDeleteDialog = this.handleShowDeleteDialog.bind(this);
    this.handleShowAddDialog = this.handleShowAddDialog.bind(this);
    // ToDo : propType entries
  };

  // handleAdd(){
  //   this.props.dialogActions.showAddDialog();
  // };

  handleShowDeleteDialog = (id) => {
    this.props.dialogActions.showDeleteDialog(id);
  };

  handleShowAddDialog = (id) => {
    this.props.dialogActions.showAddDialog(id);
  };

  generateContactItems = () => {
    return (
      <div className='grid'>
        {this.props.contacts.map(function (item, index) {
            return ( <ContactItem {...item} onDeleteDialog={this.handleShowDeleteDialog} onEditDialog={this.handleShowAddDialog}/> )
          }, this)
        }
      </div>
    );
  }

  render() {
    return(
      <div>
        <AppBar title="Contact Manager" onRightIconButtonTouchTap={this.handleShowAddDialog.bind(this)} showMenuIconButton={false} iconClassNameRight="icon-add" />
        <div className="grid-container">
          <h1 className="header"> List of Contacts </h1>
          {this.generateContactItems()}
          <DeleteDialog deleteDialog={this.props.deleteDialog} dialogActions={this.props.dialogActions} />
          <AddDialog addDialog={this.props.addDialog} dialogActions={this.props.dialogActions} editingContact={this.props.editingContact} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactManagerView);

