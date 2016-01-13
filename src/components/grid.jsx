import React from 'react';
import Item from './contactItem';

export default class Grid extends React.Component {
  constructor() {
    super();
    // ToDo : bind methods here , propType entries
  }

  render () {
    return (
      <div className='grid'>
        {this.props.contacts.map(function (item, index) {
            return ( <Item {...item} /> )
          }, this)
        }
      </div>
    );
  }
}
