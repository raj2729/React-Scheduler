const express = require('express');
const env = require('dotenv');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// User Routes
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');

// const authRoutes = require('./routes/auths');
// const adminRoutes = require('./routes/admin/auths');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const cartRoutes = require('./routes/cart');

app=express();

// Environment variables
env.config();

// mongodb
const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipkart.uvjxc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(
  url, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex : true
  } 
).then(() => {
  console.log('Database Connected');
  
});

app.use(cors());

// app.use(bodyParser());
// Same as
app.use(express.json());
app.use('/public' , express.static(path.join(__dirname , 'uploads' )));

app.use('/user' , userRoutes);
app.use('/event' , eventRoutes);

// app.use('/api' , authRoutes);
// app.use('/api' , adminRoutes);
// app.use('/api' , categoryRoutes);
// app.use('/api' , productRoutes);
// app.use('/api' , cartRoutes);

app.listen( process.env.PORT , () => {
  console.log(`Server running on PORT : ${process.env.PORT}`);
  
} )