import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';


export default class Item extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className='contact-item'>
        <div className="image"></div>
        <div className="details">
          <h3 className="name">{ this.props.name }</h3>
          <div>
            <span className="title"> Phone Number : </span>
            <span> { this.props.mobile } </span>
          </div>
          <div>
            <span className="title"> Email : </span>
            <span> { this.props.email } </span>
          </div>
          <IconButton iconClassName="icon-edit" />
          <IconButton iconClassName="icon-delete" />
        </div>
      </div>
    );
  }
}
