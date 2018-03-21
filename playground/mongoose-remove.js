const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 3 methods to delete records -> todo.remove({}) - delete all or query. You only get number of items removed ;
//todo.findOneAndRemove({key:value}) - returns the object which was deleted
//todo.findByIdAndRemove(_id) - returns the doc
