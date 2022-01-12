const url = require('url');
const querystring = require('querystring');

function getLimitParams(req, res, next) {

    console.log('limitParams > skip:', req.query.skip, "\nlimit:", req.query.limit);
    req.skip = req.query.skip;
    req.limit = req.query.limit;
    
    next();
}

module.exports = {
    getLimitParams
}