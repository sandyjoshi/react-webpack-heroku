import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';

//ToDo : This style should be in css only, due to materil UI lib we have to make such patch.
const addDialogStyle = { width : 310 };

export default class AddDialog extends React.Component {
  static propTypes = {
    editingContact: React.PropTypes.object,
    dialogActions: React.PropTypes.object.isRequired,
    addDialog: React.PropTypes.bool.isRequired
  };

  constructor() {
    super();
    this.state = {
      name : null,
      tell : null,
      email : null
    };
    this.handleChangeTel = this.handleChangeTel.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  };

  // close the dialog.
  handleCloseDialog = () => {
    this.resetState();
    this.props.dialogActions.closeAddDialog();
  };

  // Update/Add new contact.
  handleAddDialog = () => {
    // ToDO : validation for saving data.
    const data = {
      id : (this.props.editingContact ? this.props.editingContact.id : null),
      name : this.refs.name.getValue(),
      tel : this.refs.tel.getValue(),
      email : this.refs.email.getValue(),
    };
    this.resetState();
    this.props.dialogActions.AddUpdateContact(data);
  };

  // internal state maintaing
  handleChangeName = () => {
    this.setState({ name : this.refs.name.getValue() });
  }

  handleChangeEmail = () => {
    this.setState({ email : this.refs.email.getValue() });
  }

  handleChangeTel = () => {
    this.setState({ tel : this.refs.tel.getValue() });
  }

  resetState = () => {
    this.setState({ name : null , tel : null , email : null });
  }

  render() {
    const updateButtonText = this.props.editingContact ? "Update" : "Add" ;
    const name = this.state.name ? this.state.name : ( this.props.editingContact ? this.props.editingContact.name : "" ) ;
    const email = this.state.email ? this.state.email : ( this.props.editingContact ? this.props.editingContact.email : "" );
    const tel = this.state.tel ? this.state.tel : ( this.props.editingContact ? this.props.editingContact.tel : "" );

    const actionsAddDialog = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleCloseDialog} />,
      <FlatButton
        label={updateButtonText}
        primary={true}
        onTouchTap={this.handleAddDialog} />
    ];

    return(
      <Dialog contentStyle={addDialogStyle} title="Add Contact" modal={false} open={this.props.addDialog}
        onRequestClose={this.handleClose} actions={actionsAddDialog} >
        <TextField ref="name" value={name} onChange={this.handleChangeName} hintText='Full Name' />
        <TextField ref="email" value={email} onChange={this.handleChangeEmail} hintText="Email Address" />
        <TextField ref="tel" value={tel} onChange={this.handleChangeTel} hintText="Telephone Number" />
      </Dialog>)
  }
}
