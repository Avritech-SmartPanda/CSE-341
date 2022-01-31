const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// })

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send('<p>Assignment almost solved!</p>')
// })

app.use('/users',(req, res, next) => {
    console.log('/users middleware');
    res.send('<p>Handling the just the /users </p>')
})


app.use('/',(req, res, next) => {
    console.log('/ middleware');
    res.send('<p>Handling the just the /</p>')
})




app.listen(3000);