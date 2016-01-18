import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

const styleDeleteButton = { padding : 0 , height : '32px' , width : '32px' };
const styleEditButton = { padding : 0 , position : 'absolute', bottom : '0', height : '26px', minWidth : '52px' };

export default class Item extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    tel: React.PropTypes.string.isRequired
  };

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
    // ToDo : Change icon button. there is no click event.
    return (
      <li className='contact-item'>
        <IconButton className="delete-button" style={styleDeleteButton} onFocus={this.handleCloseClick} iconClassName="icon-delete" />
        <div className="image"></div>
        <div className="details">
          <h3 className="name" title={ this.props.name }>{ this.props.name }</h3>
          <div className="title">Phone Number :</div>
          <div className="value" title={ this.props.tel }>{ this.props.tel }</div>
          <div className="title">Email :</div>
          <div className="value" title={ this.props.email }>{ this.props.email }</div>
          <RaisedButton style={styleEditButton} label="edit" onTouchTap={this.handleEditClick}/>
        </div>
      </li>
    );
  }
}
