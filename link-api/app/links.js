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
        const url = await Link.findOne({shortUrl});

        if (!url) {
            return res.status(404).send({message: 'Not found'});
        }

        res.status(301).redirect(url.originalUrl);
    } catch (e) {
        return res.status(404).send({message: 'Not found'});
    }
});

module.exports = router;