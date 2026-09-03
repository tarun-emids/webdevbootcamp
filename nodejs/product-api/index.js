import express from 'express';
import productRouter from './routes/productRoutes.js'
import pool from './config/db.js';

const app = express();
const port = 8000;

// middleware
app.use(express.json());

//routes
app.use('/', productRouter)

app.listen(port, async () => {
    try{
        //just a health check to see if we can connect to the db
        const connection = await pool.getConnection();
        connection.release(); //release the connection back immediately
        
        console.log(`Server running successfully on https://localhost:${port}`)
        console.log("Database connection is established")

    } catch (error) {
        console.error(`Failed to connect to the database: ${error.message}`)
        console.log("Server is running without database connection")
    } 
})