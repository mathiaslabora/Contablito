const mongoose = require('mongoose')

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@${process.env.CLUSTER_NAME}.t6oji.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI, {useNewUrlParser: true} )
.then( console.log('DB connected') )
.catch( err => console.error() )