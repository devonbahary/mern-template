const _ = require('lodash');
const express = require('express');
const Item = require('../../models/Item');

const router = express.Router();

// @route   GET /api/items
// @desc    get all Items
// @access  public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 }) // descending order by date
    .then(items => res.json(items));
});

// @route   POST /api/items
// @desc    create new Item
// @access  public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   PATCH /api/items/:id
// @desc    update Item
// @access  public
router.patch('/:id', (req, res) => {
  const updates = _.pick(req.body, ['name']);
  Item.findById(req.params.id)
    .then(item => {
      item.set(updates);
      item.save().then(item => res.json(item));
    })
    .catch(err => res.sendStatus(404));
});

// @route   DELETE /api/items/:id
// @desc    delete Item
// @access  public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.sendStatus(200)))
    .catch(err => res.sendStatus(404));
});

module.exports = router;
