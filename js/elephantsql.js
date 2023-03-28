var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://zxurynxg:8PZBi69mf42_qEqKImhbWyxQVVDDnULl@ruby.db.elephantsql.com/zxurynxg"
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

  const createUserTable = 'CREATE TABLE users (id serial not null primary key, email varchar(255) not null unique, password varchar(255) not null)'
  
  client.query(createUserTable, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('Table created successfully');
    client.end();
  });
});