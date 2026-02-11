const router = require("express").Router();

router.get("/", (_, res) => {
	res.write("Hello world!");
	res.end();
});

module.exports = router;
