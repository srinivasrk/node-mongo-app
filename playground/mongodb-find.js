const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log(`Failed to connect to db ${error} `);

  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa5a3931f952417b495bd4b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(`unable to fetch todos ${err}`);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos');
    console.log(`Total number of documents : ${count}`);
  }, (err) => {
    console.log(`unable to fetch todos ${err}`);
  });

  db.collection('Users').find({name: 'Srini'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`unable to fetch todos ${err}`);
  });
  //db.close();
});
