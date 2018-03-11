const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log(`Failed to connect to db ${error} `);

  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text : 'Write code'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  //
  // //delete one - first item delete only
  //
  // db.collection('Todos').deleteOne({text : 'eat dinner'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  //
  // //find one and delete
  //
  // db.collection('Todos').findOneAndDelete({completed : true}).then((doc) => {
  //   console.log(doc);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndDelete({name: 'Srini'}).then((result) => {
    console.log('Successfully deleted item');
    console.log(JSON.stringify(result.value, undefined, 2));
  }, (err) => {
    console.log(`Error while deleting a document ${err}`);
  });

//  db.close();
});
