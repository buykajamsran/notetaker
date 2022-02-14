const { createNewNote, validateNote } = require('../../lib/notes');
const router = require('express').Router();
const { db } = require('../../db/db.json');
const { nanoid } = require('nanoid');

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});

router.post('/notes', (req, res) => {

    req.body.id = nanoid();
    
    if (!validateNote(req.body)) {
        res.status(400).send('The note is missing information.');
    } else {
        const note = createNewNote(req.body, db);
        res.json(note);
    }
})

// export router
module.exports = router;