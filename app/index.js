const express = require("express");
const routes = require("./routes")

const app = express()

routes(app)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App started on port : ${port}`);
})

module.exports = app