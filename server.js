const express = require ('express');
const app=express();
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config();

//connecting to database
const connectDB= require('./config/helpers/connectDB');
const { use } = require('./routes/personRoutes');
connectDB();

//  routes///
app.use('/api/person', require('./routes/personRoutes'))


const PORT=process.env.PORT
app.listen(PORT,(err)=>err?console.log(err): console.log(`server is running on port ${PORT}`));
