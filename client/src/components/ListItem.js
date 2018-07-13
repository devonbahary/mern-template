import React from 'react';
import { connect } from 'react-redux';
import { updateItem, removeItem } from '../actions/items';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  state = {
    isEdit: false,
    name: this.props.item.name
  };

  toggleEditMode = () => this.setState((prevState) => ({
    isEdit: !prevState.isEdit,
    name: this.props.item.name
  }));

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  // updateItem
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateItem(this.state.name);
    this.setState(() => ({ isEdit: false, name: '' }));
  };

  handleRemove = () => this.props.removeItem();

  render() {
    return (
      <li>
        {this.state.isEdit ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="name"
              required
            />
            <button type="submit">
              Update
            </button>
            <button
              type="button"
              onClick={this.toggleEditMode}
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            {this.props.item.name}
            <button
              type="button"
              onClick={this.handleRemove}
            >
              Remove
            </button>
            <button
              type="button"
              onClick={this.toggleEditMode}
            >
              Edit
            </button>
          </div>
        )}
      </li>
    );
  };
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(removeItem(ownProps.item._id)),
  updateItem: (name) => dispatch(updateItem(ownProps.item._id, { name }))
});

export default connect(undefined, mapDispatchToProps)(ListItem);
