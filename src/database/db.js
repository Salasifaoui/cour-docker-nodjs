const { MongoClient} = require('mongodb');
const uri = 'mongodb+srv://salah:TQSJYTs5IBqInpKn@cluster0.zle3hgm.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');

module.exports = {
    products,
}