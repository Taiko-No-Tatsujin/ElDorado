const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../../config/index.json');

module.exports = {
    getUserInfo:function(req,next){
    const token=req.headers.authorization.split(' ')[1];    
       return jwt.verify(token, config.jwtSecret, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) { return res.status(401).end(); }
        
            const userId = decoded.sub;
        
            // check if a user exists
            return User.findById(userId,(userErr,user)=>{
                  return next(userErr,user);
            })
          });
    }
};