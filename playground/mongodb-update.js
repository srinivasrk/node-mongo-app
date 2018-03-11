const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log(`Failed to connect to db ${error} `);

  }
  console.log('Connected to MongoDB server');

  // find one and update
  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5aa5b7bfd14d0170a3746ecd')
  },{
    $set : {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

//  db.close();
});
