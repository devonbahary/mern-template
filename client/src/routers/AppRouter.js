import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getSamples } from '../actions/samples';
import Home from '../components/Home';

class AppRouter extends React.Component {
  componentWillMount() {
    this.props.getSamples();
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
  getSamples: () => dispatch(getSamples())
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
