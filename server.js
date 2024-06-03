const express = require("express")
const cors = require("cors")
// const finEaseRoutes = require("./routes/finEaseRoutes")
const { connect } = require("http2")
require("dotenv").config()

// express app
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
const finEaseRoutes = require("./routes/finEaseRoutes")
app.use("/api/v1", finEaseRoutes);

// connecting to backend

const connectToDB = require("./connection/db")

app.listen(process.env.PORT, async()=> {
    console.log("Serving on PORT 9999👂😉")
    await connectToDB()
})