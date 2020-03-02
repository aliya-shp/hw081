const express = require('express');
const nanoid = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

router.post('/', async (req, res) => {
    const originalUrl = req.body.originalUrl;

    const link = new Link({
        originalUrl,
        shortUrl: nanoid(7),
    });

    try {
        await link.save();

        return res.send(link);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl;
    try {
        const item = await Link.findOne({shortUrl});

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        return res.send(item);
    } catch (e) {
        return res.status(404).send({message: 'Not found'});
    }
});

module.exports = router;