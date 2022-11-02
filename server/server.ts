import express from 'express';

const app = express();



// app.get('/', (req,res) => {
//     res.send({});
// });

app.listen(4201, '127.0.0.1', function() {
    console.log('Server now listening on 3001');
});