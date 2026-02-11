const express = require("express");
const path = require("node:path");
require("dotenv").config({ quiet: true });

const port = process.env.PORT || 3500;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/fonts", express.static(path.join(__dirname, "public", "fonts")));
app.use("/assets", express.static(path.join(__dirname, "public", "assets")));
app.use("/", require("./routes/default"));
app.listen(port, (e) => {
	if (e) return console.error(e);
	console.log(`Listening on http${process.env.STATE === "prod" ? "s" : ""}://localhost:${port}`);
});
