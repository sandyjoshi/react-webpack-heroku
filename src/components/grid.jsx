import React from 'react';
import Item from './contactItem';


export default class Grid extends React.Component {
  constructor() {
    super();
  }

  render () {
    let items = [{ name : 'sandeep' , mobile : '9988776655' , email : 'abc@abc.com' }];

    return (
      <div>
        {items.map(function (item, index) {
            return ( <Item {...item} /> )
          }, this)
        }
      </div>
    );
  }

}
