import React from 'react';

export default class Item extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div >
        <div> { this.props.name } </div>
        Phone Number :
        <div> { this.props.mobile } </div>
        Email :
        <div> { this.props.email } </div>
      </div>
    );
  }
}
