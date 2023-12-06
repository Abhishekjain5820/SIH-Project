//to use this syntex add "type":"module" in package.json this is ES6 latest syntex.In this syntex make sure to write .js after file import
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/conn.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

const app=express()
connectDB();

app.use(express.json())
app.use("/api/v1",userRoutes)

const PORT=process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
  });