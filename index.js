const http = require ('http');
const express = require ('express')
const mysql = require ('mysql')
const app = express();

//app.arguments(express.json())

try {
  // establish connection to the MYSQL database
  function getConnection () {
return mysql.createConnection({
  host: 'localhost',
  user: `kel\nkomo m`,
  password: '',
  database: 'Node',
})};

} catch (error) {
  
}

try {
// check whether connection to database was successfull
getConnection().connect( (err) => {
if(err){
return console.error('err:' + err.message)
}
console.log(`Database is connected`)
});
} catch (error){
  console.error(`error trying to establish connnection`)
}

//const data = data : {
//HSSS: {},

//};

app.post('/api', (req,res) => {

  const querystring = ('')
  getConnection().query(querystring)
  res.end;
});

// set default listening on the environment and if busy then listen on port 9090
const port = process.env.PORT || 9090
app.listen(port, () => console.log(`Listening on port ${port}`));

// const server = http.createServer((req, res) => {
  //  if(req.url === '/api'){
   //     res.write('Hello World');
   //     res.end();
   // }
//});

//server.listen(9090);

// console.log('Listening on port 9090');
