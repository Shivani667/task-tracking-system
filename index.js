const express = require('express');
const connectDB = require('./database');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const teamRoutes = require('./routes/team');

const app = express();
app.use(express.json());

connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Task Tracking System Backend is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/teams', teamRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
