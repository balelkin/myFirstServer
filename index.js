const port = 3200;
const PID = process.pid;
require('./core/mongobase')

const app = require('./core/express')
const bodyParser = require('body-parser')
const studentsRoute = require('./routes/student.routes')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/students', studentsRoute) 

app.listen(port, ()=>{
console.log(`Server started on port: ${port}, and PID: ${PID}`);
})

