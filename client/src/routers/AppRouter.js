import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getItems } from '../actions/items';
import Home from '../components/Home';

class AppRouter extends React.Component {
  componentWillMount() {
    this.props.getItems();
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems())
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
