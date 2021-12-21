const { Router } = require('express');
const {getFeed} = require('../controllers/feed')

const feedRouter = Router();
feedRouter.get('/api/feed', getFeed);


module.exports = feedRouter;
