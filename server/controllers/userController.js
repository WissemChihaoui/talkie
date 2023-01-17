const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async(req, res, next) => {
    try{
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({username});
    if(usernameCheck){
        return res.json({ msg: "Username is already taken!", status: false});
    }
    const emailCheck = await User.findOne({email});
    if(emailCheck){
        return res.json({ msg: "E-mail is already used!", status: false});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });
    delete user.password;
    return res.json({status: true, user});
}catch(ex) {
    next(ex);
}
};

module.exports.login = async(req, res, next) => {
    try{
    const { username, password } = req.body;
    const user = await User.findOne({username});
    
    if(!user){
        
        return res.json({ msg: "Incorrect Data! Please check your username and password", status: false});
        
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        
        return res.json({ msg: "Incorrect Data! Please check your username and password", status: false});
    }
    delete user.password;

    
    return res.json({status: true, user});
}catch(ex) {
    next(ex);
}
};

module.exports.setAvatar = async(req, res, next) => {
    try{
        const userId = req.params.id;
        const avatarImage = req.body.image;
        const userData = await User.findByIdAndUpdate(userId,{
            isAvatarImageSet: true,
            avatarImage,
        });
        return res.json({
            isSet:userData.isAvatarImageSet,
            image:userData.avatarImage,
            status:true,
        });
    }catch(ex){
        next(ex)
    }
};
module.exports.getUsers = async(req, res, next) => {
    try{
        const userData= await User.find({});
        return res.json({
            userImage:userData.avatarImage,
            userId:userData.username,
            userData
            
        });
    }catch(ex){
        next(ex)
    }
}

module.exports.getUser = async(req, res, next)=>{
    try{
        const userId = req.params.id;
        const userDataId = await User.findById(userId);
        userDataId.password = "undefined from SSL";
        
        return res.json({
            userDataId
        });
    }catch(ex){
        next(ex)
    }
}