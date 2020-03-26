const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email address!');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password should not contain "password"!')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})


// .methods === Instance methods
userSchema.methods.generateAuthToken = async function(){
    const user = this;

    /**
     * jwt.sign({'unique identifier'}, 'secret key for signature', {expiresIn: ...})
     */
    const token = jwt.sign({ _id: user._id.toString() }, 'omega-auth-token' );
    user.tokens = user.tokens.concat({token});
    await user.save();

    return token;
}


// .statics === Model methods
userSchema.statics.findByCredentials = async (email, password) => {
    const user =  await User.findOne ({ email });

    if(!user){
        throw new Error ('Unable to login!');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch) {
        throw new Error ('Unable to login!');
    }

    return user;
}

//  Created a document middleware.
userSchema.pre('save', async function (next) {
    const user = this;

    /**
     * user.isModified( '{ field from schema }' ) 
     * Snippet implemented below checks if a particular field from the schema has been modified
     * or created.
    */ 

    if (user.isModified('password')) {

        /**bcrypt.hash( {plain text password to be hashed}, Number of rounds)
         * Number of rounds refers to the number of times the hashing
         * algorithm is executed. Recommended number of rounds (NoR) = 8.
         * 
         * If NoR is very small = Easily hacked
         * If NoR is large = app loading time ++ => Not good!!
         * 
         **/ 

        user.password = await bcrypt.hash(user.password, 8);
    }
    
    /**
     *  next() ==> function has been executed. Run available code snippets
     *  down the pipeline
     */
    next(); 
})

// Document for DB
const User = mongoose.model('User', userSchema);

module.exports = User