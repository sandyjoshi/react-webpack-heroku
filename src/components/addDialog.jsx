import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import TextField from 'material-ui/lib/text-field';


export default class AddDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      changedEmail : false,
      changedName : false,
      changedTel : false
    };
    // ToDo : bind methods here , propType entries
  };

  handleCloseDialog = () => {
    this.resetState();
    this.props.dialogActions.closeAddDialog();
  };

  resetState = () => {
    this.setState({ changedName : false , changedEmail : false , changedTel : false , name : null , tell : null , email : null });
  }

  handleAddDialog = () => {
    let data = {
      id : (this.props.editingContact ? this.props.editingContact.id : null),
      name : this.refs.name.getValue(),
      tel : this.refs.tel.getValue(),
      email : this.refs.email.getValue(),
    };
    this.resetState();
    this.props.dialogActions.AddUpdateContact(data);
  };

  handleChangeName = () => {
    this.setState({ changedName : true , name : this.refs.name.getValue() });
  }

  handleChangeEmail = () => {
    this.setState({ changedEmail : true , email : this.refs.email.getValue() });
  }

  handleChangeTel = () => {
    this.setState({ changedTel : true , tel : this.refs.tel.getValue() });
  }

  render() {
    const updateText = this.props.editingContact ? "Update" : "Add" ;

    let name = this.state.changedName ? this.state.name : ( this.props.editingContact ? this.props.editingContact.name : "" ) ;
    let email = this.state.changedEmail ? this.state.email : ( this.props.editingContact ? this.props.editingContact.email : "" );
    let tel = this.state.changedTel ? this.state.tel : ( this.props.editingContact ? this.props.editingContact.tel : "" );

    const contentStyle = {
      width : 310
    };

    const actionsAddDialog = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleCloseDialog} />,
      <FlatButton
        label={updateText}
        primary={true}
        onTouchTap={this.handleAddDialog} />
    ];

    return(
      <Dialog contentStyle={contentStyle} title="Add Contact" modal={false} open={this.props.addDialog}
        onRequestClose={this.handleClose} actions={actionsAddDialog} >
        <TextField ref="name" value={name} onChange={this.handleChangeName.bind(this)} hintText='Full Name' />
        <TextField ref="email" value={email} onChange={this.handleChangeEmail.bind(this)} hintText="Email Address" />
        <TextField ref="tel" value={tel} onChange={this.handleChangeTel.bind(this)} hintText="Telephone Number" />
      </Dialog>)
  }
}
