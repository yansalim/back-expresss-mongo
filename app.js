const express = require("express")
const cors = require ("cors")
const app = express()


app.use(cors())

app.use(express.json())

app.listen(8080,function(){
    console.log("It's Work!")
})

