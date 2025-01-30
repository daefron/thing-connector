const express = require("express");
const app = express();

const mainRouter = require("./router");

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));