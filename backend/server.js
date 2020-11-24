const express = require('express');
var multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
//const find_pets_py = require('./scraperCall')

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
const petsRouter = require('./routes/pets');
const imagesRouter = require('./routes/images');
const find_pets_py = require('./scraperCall');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
console.log(find_pets_py)
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/images', imagesRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

/*app.get('/find_pets_py', async(req, res, next) => {
    const location = req.location;
    //location = 'chico';
    find_pets_py('chico');

    res.send('hi')
})*/

 /*app.get('/find_pets_py', find_pets_py);
 find_pets_py('chico')
*/
 app.get('/find_pets_py/:city', function(req, res){
    console.log('in find_pets_py')
    // var pets = find_pets_py(req, res)
    console.log('enter the func')
    const spawn = require("child_process").spawn;
  
    const process = spawn("python3", ["./find_pets.py", req.params.city]);
    var dataToSend;
    process.stdout.on("data", (data, err) => {
     /* if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }*/
    console.log(`Node JS got Data  ${data}\n`);

    //console.log(JSON.stringify(data.toJSON()))
    //console.log(data.toJSON())
     //dataToSend = data
    //var bitch = JSON.parse('{{data | tojson}}')
    console.log(JSON.parse(data))
console.log(`data dot length ${data.length}`);

         res.send(JSON.parse(data))

     //console.log(bitch);
      console.log(`Type is: ${typeof data}`)
      console.log(`hey friend ${JSON.parse(data.toString())}`)

       // console.log(typeof robot);
    })  
      /*process.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        console.log(dataToSend)
        //res.send(dataToSend)
        });     //res.send(data);*/
  
    
    /* .then(pets => {
        console.log(pets)
        res.json(pets)
    })
    .catch(err => res.status(400).json('Error: ' + err));*/
    console.log(dataToSend)
 })

