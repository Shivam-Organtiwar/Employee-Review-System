const mongoose = require('mongoose');                                //importing the ODM mongoose
mongoose.connect('mongodb://localhost/contact_list_db');             //connecting to the database
const db = mongoose.connection;                                      //accquiring the connection

db.on('error', console.error.bind(console, 'Error In Connecting To MongoDB'));

db.once('open', function(){                                         //connection is done
     console.log("Successfully Connected To Database");
 });
