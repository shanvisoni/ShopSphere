import  express from 'express'; // Assuming 'express' exports a default object
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors'
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from'./routes/productRoutes.js'


dotenv.config();
connectDB();

const app=express()


app.use(cors({
    origin: [
        "https://shopsphere-1-client.onrender.com",  // Frontend in development

      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
}
   
))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);


// app.get('/',(req,res)=>{
//     res.send({msg:"welcome to ecommerce app"})
// })


 

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.green)
})


