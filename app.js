const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const typeRoutes = require('./routes/typeRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/types', typeRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to uncaught expression`);
    process.exit(1)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log('shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1)
    })
})