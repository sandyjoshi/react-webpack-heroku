import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import dialogActions from '../actions/dialog';

//ToDo : This style should be in css only, due to materil UI lib we have to make such patch.
const deleteDialogStyle = { width : 310 };

export default class DeleteDialog extends React.Component {
  static propTypes = {
    dialogActions: React.PropTypes.object.isRequired,
    deleteDialog: React.PropTypes.bool.isRequired
  };

  constructor() {
    super();
  };

  // close dialog
  handleCloseDialog = () => {
    this.props.dialogActions.closeDeleteDialog();
  };

  // confirm to delete, contact item.
  handleDeleteConfirmed = () => {
    this.props.dialogActions.deleteConfirmed();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleCloseDialog} />,
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleDeleteConfirmed} />
    ];

    return(
      <Dialog contentStyle={deleteDialogStyle} title="Delete this Contact" modal={false} open={this.props.deleteDialog}
        onRequestClose={this.handleClose} actions={actions} >
        Deleted contact can not be recovered, Are you sure to Delete ?
      </Dialog>
    )
  }
}
