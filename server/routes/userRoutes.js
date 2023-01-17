const {register, login, setAvatar, getUsers, getUser} = require("../controllers/userController")

const router = require("express").Router();

router.post("/register",register);
router.post("/login",login);
router.post("/setAvatar/:id",setAvatar);
router.get("/getUsers",getUsers)
router.get("/getUser/:id",getUser)

module.exports = router;