

function getLimitParams(req, res, next) {
    req.skip = address.searchParams.get('skip') || 0;
    req.limit = address.searchParams.get('limit') || 20;

    console.log('limitParams: skip:', res.skip, "\nlimit:", res.limit);
    
    next();
}

module.exports = {
    getLimitParams
}