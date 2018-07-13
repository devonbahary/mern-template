import React from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import ListItem from './ListItem';

const Home = ({ items, loadingItems }) => (
  <div>
    <h1>[MERN] Shopping List</h1>
    <p>{loadingItems ? 'Loading items' : 'Items loaded.'}</p>
    <ul>
      {items.map(item => (
        <ListItem key={item._id} item={item} />
      ))}
    </ul>
    <AddItem />
  </div>
);

const mapStateToProps = (state) => ({
  items: state.items,
  loadingItems: state.loading
});

export default connect(mapStateToProps)(Home);
