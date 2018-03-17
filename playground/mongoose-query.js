const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5aac506254d131c8020a8fd7';
//
// if(!ObjectID.isValid(id)) {
//   return console.log('Id not valid');
// }
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(! todo){
//     return console.log('Id not found');
//   }
//   console.log('todo', todo);
// }).catch((e) => console.log(e));

if(ObjectID.isValid(id)){
  User.findById(id).then((user) => {
    if(! user) {
      return console.log(` ${id} is not found in the database.`);
    }

    console.log('User details', user);
  });
} else {
  console.log('Invalid ID')
}
