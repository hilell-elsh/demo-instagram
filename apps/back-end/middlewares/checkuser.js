const { getUser } = require('../services/users')
const { getId } = require('../services/object');

async function checkUser(req, res, next) {
    const userId = req.headers['user-id'];
    console.log("checkuser > checkuser: userId:", userId);
    
    if (userId === "0") {
        console.log('checkuser > checkuser: admin request');
        req.currentUser = "admin"
        next();
    } else {
        console.log('checkuser > checkuser: another user request');
        // const user = await getUser(userId);
                
        try {
            const currentUserId = getId(userId);
            console.log(`checkuser: currentUserId ${currentUserId}`);
            const currentUser = await getUser(currentUserId);
            console.log(`checkuser: currentUser ${currentUser}`);
            req.currentUser = currentUser;
            req.currentUserId = req.currentUser._id;
        } catch (err) {
            // err
        }
    
        next();
    }
}

async function validateUser(req, res, next) {
    if (req.currentUser) {
        next();
    } else {
        res.status(403).json({message: 'you`re not allawed'}).end();
    }
}

module.exports = {
    checkUser,
    validateUser
}