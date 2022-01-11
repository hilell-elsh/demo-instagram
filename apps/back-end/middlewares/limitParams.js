const url = require('url');
const querystring = require('querystring');

function getLimitParams(req, res, next) {
    // const queryObject = url.parse(req.url,true).search;
    // console.log(`getLimitParams: ${queryObject}`);
    // // const searchParams = new URLSearchParams(queryString);
    // // req.skip = searchParams.get('skip') || 0;
    // // req.limit = searchParams.get('limit') || 20;
    // res.skip = queryObject.skip || 0;
    // res.limit = queryObject.limit || 20;
    

    console.log('limitParams > skip:', req.query.skip, "\nlimit:", req.query.limit);
    req.skip = req.query.skip;
    req.limit = req.query.limit;
    
    next();
}

module.exports = {
    getLimitParams
}