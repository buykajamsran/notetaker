const { createNewNote, validateNote } = require('../../lib/notes');
const router = require('express').Router();
const { notes } = require('../../db/notes');

module.exports = router;