const PORT = 3000;

//Supporting Modules Declaration
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/client/dist/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log("Listing on port " + PORT);
});




//Cassandra DB Connection
//const PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider; -- 
//const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'nagendra', authProvider: new PlainTextAuthProvider('username', 'password') });
const cassandra = require('cassandra-driver');
cassandra.Promise = global.Promise;
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'nagendra' });

client.connect((err) => {
  if (err) {
    console.error('There was an error when connecting to cassandra', err);
  } else {
    console.log('Connected to Cassandra cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());    
  }
});



