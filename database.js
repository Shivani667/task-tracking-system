const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://shivani7335_db_user:TbMfWoYrwVH5UxU4@cluster0.aabvnmo.mongodb.net/?appName=Cluster0');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
