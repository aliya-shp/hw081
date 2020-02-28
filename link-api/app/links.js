const express = require('express');
const validUrl = require('valid-url');
const nanoid = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

const baseUrl = 'http://localhost:8000/';

router.get('/:shortUrl', async (req, res) => {
    console.log(req.params.shortUrl);
    try {
        const item = await Link.find(req.params.shortUrl);

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);

    if (!validUrl.isUri (data)) {
        return res.status(400).send({message: "This URL is not valid"});
    }

    const originalUrl = data;
    const shortUrl = nanoid(7);
    
    const link = new Link({
        originalUrl,
        shortUrl,
    });

    try {
        await Link.save();

        res.send(link);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;