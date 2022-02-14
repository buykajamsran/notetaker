const { createNewNote, validateNote } = require('../../lib/notes');
const router = require('express').Router();
const { notes } = require('../../db/notes');
import { nanoid } from 'nanoid';

router.post('/notes', (req, res) => {

    req.body.id = nanoid();
    
    if (!validateNote(req.body)) {
        res.status(400).send('The note is missing information.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})
// export router
module.exports = router;