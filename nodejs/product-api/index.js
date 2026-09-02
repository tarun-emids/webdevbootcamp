import express from 'express';
import productRouter from './routes/productRoutes.js'

const app = express();
const port = 8000;

// middleware
app.use(express.json());

//routes
app.use('/', productRouter)

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`)
})