const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log(`Failed to connect to db ${error} `);

  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text : 'to do something',
  //   completed : false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Unable to insert to database ${err}`);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // Insert into users name, age and location

  // db.collection('Users').insertOne({
  //   name: 'Srini',
  //   age: 25,
  //   location: 'Cincinnati'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(`Error while inserting the database ${err}`);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //   // get the timestamp from ID
  //
  //   console.log(result.ops[0]._id.getTimestamp());

  // })
  db.close();
});
