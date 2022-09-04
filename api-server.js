const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use((err,req,res,next) => {
res.status(500).send("Internal Server Error" + err.message);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))