import express from 'express';
import indexRoutes from './routes/index';

const app =express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


//middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));
//routes
app.use('/',indexRoutes);


app.listen('3001');
console.log('Server on port ',3001);
