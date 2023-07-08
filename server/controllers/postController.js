const Post = require("../model/postModel");


module.exports.createPost = async(req, res, next) => {
    try{
        const {content, userId} = req.body;
        const post = await Post.create({
            author: userId,
            content: content,
        })
        return res.json({status: true, post});
    }catch(ex) {
        next(ex);
    }
};

module.exports.getAllPost = async(req, res, next) => {
    try{
        
        const postData = await Post.find({});
        
        return res.json({
            postData
        });
    }catch(ex){
        next(ex)
    }
}