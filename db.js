const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No options are needed
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Mongoose connection error:', error.message);
        process.exit(1); // Exit with error code
    }
};

module.exports = connectdb;
