var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose model

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
console.log('Saved todo', doc);
}, (e) => {
  console.log(`unable to save data ${e}`)
});

var newTodo = new Todo({
  text: 'get groceries',
  completed: true,
  completedAt: -1
});

newTodo.save().then((doc) => {
console.log('Saved todo', doc);
}, (e) => {
  console.log(`unable to save data ${e}`)
});
