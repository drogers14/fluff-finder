function find_pets_py(req, res) {
  console.log('enter the func')
  //req = 'redding'
  const spawn = require("child_process").spawn;

  const process = spawn("python3", ["./find_pets.py", req.params.city]);
  var to_send={};
  process.stdout.on("data", (data, err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
   console.log(`Node JS got Data  ${data}\n`)
    //console.log(`Type is: ${typeof data}`)
    data.forEach(function (robot) {
     // console.log(typeof robot);
  });
    //console.log('hiiiiii ', JSON.parse(data))
   // myjson = JSON.parse(data);

    /*mystr = data.toString();
    console.log(`Data To String ${mystr} Type of ${typeof mystr}`)

    myjson = JSON.parse(mystr);
    console.log(`JSON IS: ${myjson}`);
    console.log(myjson.Response);
    console.log(myjson.Message);

    //console.log(data.toString());
    to_send = data.toString();
    */
    /* toJson = data.toString()
   //console.log(JSON.parse(toJson))
   //res.send(data.toString()); 
   //console.log(data)
   res.json(toJson)
   return;
});*/
    //console.log('this is my data? ', data.toString())
    //res.json(data.toString());
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.send(dataToSend)
      });     //res.send(data);

  });

  //return;
}

module.exports = find_pets_py;
