import React                    from 'react';
import { Provider }             from 'react-redux';
import routes                   from '../routes';
import { ReduxRouter }          from 'redux-router';

export default class Root extends React.Component {
  static propTypes = {
    store : React.PropTypes.object.isRequired,
    debug : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool
  };

  static defaultProps = {
    debug : false,
    debugExternal : false
  };

  render () {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter>
          {routes}
        </ReduxRouter>
      </Provider>
    );
  }
}
