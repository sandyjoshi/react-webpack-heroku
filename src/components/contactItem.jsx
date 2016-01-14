import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';


export default class Item extends React.Component {
  constructor() {
    super();
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleCloseClick(){
    this.props.onDeleteDialog(this.props.id);
  };

  handleEditClick(){
    this.props.onEditDialog(this.props.id);
  };

  render () {
    let style = { padding : 0 , height : '32px' , width : '32px' };
    let style2 = { padding : 0 , position : 'absolute', bottom : '0', height : '26px', minWidth : '52px' };
    // ToDo : Change icon button. there is no click event.
    return (
      <div className='contact-item'>
        <IconButton className="delete-button" style={style} onFocus={this.handleCloseClick} iconClassName="icon-delete" />
        <div className="image"></div>
        <div className="details">
          <h3 className="name">{ this.props.name }</h3>
          <div className="title">Phone Number :</div>
          <div className="value">{ this.props.tel }</div>
          <div className="title">Email :</div>
          <div className="value">{ this.props.email }</div>
          <RaisedButton style={style2} label="edit" onTouchTap={this.handleEditClick}/>
        </div>
      </div>
    );
  }
}
