import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';

export default class Item extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <li className='contact-item'>
        <div className="image"></div>
        <div className="details">
          <div> { this.props.name } </div>
          Phone Number :
          <div> { this.props.mobile } </div>
          Email :
          <div> { this.props.email } </div>
          <RaisedButton label="Edit" labelPosition="after">
            <FontIcon className="icon-edit" />
          </RaisedButton>
          <RaisedButton label="Delete" labelPosition="after">
            <FontIcon className="icon-delete" />
          </RaisedButton>
        </div>
      </li>
    );
  }
}
