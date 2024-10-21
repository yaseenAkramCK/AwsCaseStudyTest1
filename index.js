const express = require('express')
const serverless = require('serverless-http')
const app = express()
const port =3000;

app.get('/checkserver', function (req, res) {
  res.send('Hello World express server is up finally executed using the test20')
})

// app.listen(port,()=>{
//     console.log(`The Nodejs Server is Up and Running in the PORT${port}`);
// })

export const handler = serverless(app);