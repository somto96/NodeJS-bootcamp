const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        // Target "Authorization" in header
        const token = req.header('Authorization').replace('Bearer ', '');
        // console.log(token);
        const decoded = jwt.verify(token, 'omega-auth-token');
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token
        })
        
        if (!user) {
            throw new Error()
        }

        req.user = user;

        next();
        // console.log(req.header); /** .header() is a method */

    } catch (e) {
        res.status(401).send('Please authenticate!')
    }
}

module.exports = auth