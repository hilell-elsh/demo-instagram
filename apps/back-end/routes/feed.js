const { Router } = require('express');
const { getLimitParams } = require('../middlewares/limitParams')
const  {getFeed } = require('../controllers/feed')

const feedRouter = Router();
feedRouter.get('/api/feed', getLimitParams, getFeed);


module.exports = feedRouter;
