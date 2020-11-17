const router = require('express').Router();

var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 
  
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 
let Image = require('../models/image.model');
// Retriving the image 
router.route('/').get((req, res) => { 
    imgModel.find({}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            res.render('app', { items: items }); 
        } 
    }); 
}); 

// Uploading the image 
router.post('/plus', upload.single('image'), (req, res) => { 
  console.log('adding pic now');
  console.log(req.body.img);
  console.log(req.body.name);
  console.log(req.body.desc);

    var obj = { 
        name: req.body.name, 
        desc: req.body.desc, 
        img: { 
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.body.name)), 
            contentType: 'image/png'
        } 
    }
    console.log('obj: ', obj); 
    Image.create(obj, (err, item) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
             item.save(); 
           // res.redirect('/'); 
        } 
    }); 
}); 

module.exports = router;