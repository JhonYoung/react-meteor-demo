import { Mongo } from 'meteor/mongo';
let collections =  {
	todos: new Mongo.Collection('todos')
}

export default collections;