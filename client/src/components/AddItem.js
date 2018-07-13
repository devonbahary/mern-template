import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
  state = {
    name: ''
  };

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState(() => ({ name: '' }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="name"
        />
        <button
          type="button"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  };
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(undefined, mapDispatchToProps)(AddItem);
