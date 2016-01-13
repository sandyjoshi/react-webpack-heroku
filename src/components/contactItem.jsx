import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';


export default class Item extends React.Component {
  constructor() {
    super();
  }

  handleAdd(){
    this.Props.history.pushState(null, '/in/add/');
  };

  render () {
    let style = { padding : 0 , height : '32px' , width : '32px' };
    let style2 = { padding : 0 , position : 'absolute', bottom : '0', height : '26px', minWidth : '52px' };
    return (
      <div className='contact-item'>
        <IconButton className="delete-button" style={style} iconClassName="icon-delete" />
        <div className="image"></div>
        <div className="details">
          <h3 className="name">{ this.props.name }</h3>
          <div className="title">Phone Number :</div>
          <div className="value">{ this.props.tel }</div>
          <div className="title">Email :</div>
          <div className="value">{ this.props.email }</div>
          <RaisedButton style={style2} label="edit" />
        </div>
      </div>
    );
  }
}
