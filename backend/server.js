const express = require('express');
var multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');

var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB database connection established successfully');
    })

const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets')
app.use('/users', usersRouter);
app.use('/pets', petsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});