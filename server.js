const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./db/db');

// Routes
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/document');

dotenv.config();
connectdb();

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Return in JSON format to frontend
app.use('/api/auth', authRoutes);
app.use('/api/document', documentRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






















/*
// packages
const express=require('express');// is very powerfull
 const http=require('http');
 const dotenv=require('dotenv'); // handle this file .env
 const cors=require('cors');

// Mongodb
const connectdb=require('./db/db');

// Routes
const authRoutes=require('./routes/auth');
const documentRoutes=require('./routes/document');

require('dotenv').config();
connectdb();

const app=express();
const server=http.createServer(app);

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content_type','Authorization']
}));
app.use(express.json()); // return in json format to frontend
app.use('/api/auth',authRoutes);
app.use('/api/document',documentRoutes);


const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>
{
    console.log(`Server running  on port ${PORT}`);
}
);
*/