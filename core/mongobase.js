const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://balelkin:admin@clusterstud.erjdy.mongodb.net/userbase?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () =>{
console.log('Connection mongoose has started');
})
