const {createPost, getAllPost} = require("../controllers/postController")

const router = require("express").Router();

router.post("/createPost",createPost);
router.get("/getAllPost",getAllPost);

module.exports = router;