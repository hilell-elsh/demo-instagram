

function getLimitParams(req, res, next) {
    req.skip = address.searchParams.get('skip');
    req.limit = address.searchParams.get('limit');

    console.log('skip:', res.skip, "\nlimit:", res.limit);
    
    next();
}

module.exports = {
    getLimitParams
}