const express=require('express');
const app=express();
const morgan=require('morgan');

const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
const bodyParser=require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.methods==='OPTIONS')
    {
        res.header('Access-Control-Allow-Origin','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({
        });
    }
    next();
})

app.use('/products', productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>
{
    const error=new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>
{
    res.status(error.status || 500).json({
       error:
       {
           message:error.message
       }
    });
});
module.exports=app;