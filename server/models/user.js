const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    host: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

UserSchema.methods.auth = function(attempt, cb) {
    bcrypt.compare(attempt, this.password, (err, isMatch) => {
        if(err) {
            console.error(err);
            cb(false);
        } else {
            cb(isMatch);
        }
    });
}

UserSchema.methods.withoutPwd = function() {
    let user = this.toObect();
    delete user.password;
    return user;
}

module.exports = mongoose.model("user", UserSchema);