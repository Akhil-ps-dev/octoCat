const express = require('express')
const app = express()
const cors = require('cors');


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use((err,req,res,next) => {
res.status(500).send("Internal Server Error" + err.message);
});
app.listen(3001, () => console.log(`Example app listening on port ${3001}!`))