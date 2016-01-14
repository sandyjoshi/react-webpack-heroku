import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
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
  static propTypes = {
    editingContact: React.PropTypes.object,
    dialogActions: React.PropTypes.object.isRequired,
    addDialog: React.PropTypes.bool.isRequired,
    deleteDialog: React.PropTypes.bool.isRequired,
    contacts: React.PropTypes.array.isRequired,
  };

  constructor() {
    super();
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
    this.showAddDialog = this.showAddDialog.bind(this);
  };

  showDeleteDialog = (id) => {
    this.props.dialogActions.showDeleteDialog(id);
  };

  showAddDialog = (id) => {
    this.props.dialogActions.showAddDialog(id);
  };

  generateContactItems = () => {
    return (
      <div className='grid'>
        {this.props.contacts.map(function (item, index) {
            return ( <ContactItem key={index} {...item} onDeleteDialog={this.showDeleteDialog} onEditDialog={this.showAddDialog}/> )
          }, this)
        }
      </div>
    );
  }

  render() {
    return(
      <div>
        <AppBar title="Contact Manager" onRightIconButtonTouchTap={this.showAddDialog} showMenuIconButton={false} iconClassNameRight="icon-add" />
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

