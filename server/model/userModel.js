const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
        min:8,
    
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage:{
        type: String,
        default: "",
    },
    description:{
        type:String,
        default:""
    },
    images:{
        type:Array
    },
    friends:{
        type:Array
    },
    isPrivate:{
        type:Boolean,
        default:false
    },
    friendsReqGets:{
        type:Array
    },
    friendsReqSents:{
        type:Array,
    },
    sexe:{
        type:String
    },
    country:{
        type:String
    },
    age:{
        type:Number
    }
});

module.exports = mongoose.model("Users", userSchema);