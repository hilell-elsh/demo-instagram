

function getLimitParams(req, res, next) {
    res.skip = address.searchParams.get('skip');
    res.limit = address.searchParams.get('limit');

    console.log('skip:', res.skip, "\nlimit:", res.limit);
    
    next();
}

module.exports = {
    getLimitParams
}