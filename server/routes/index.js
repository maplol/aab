const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/catalog", productRouter);

module.exports = router;
