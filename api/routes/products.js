const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Handling Get requests'
    });
});
router.post('/',(req,res,next)=>{
    const product={
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling Port requests',
        createdProduct:product
    });
});
router.get('/:productId',(req,res,next)=>
{
    const id=req.params.productId;
    if(id==='special')
    {
        res.status(200).json({
            message:'This is special id',
            id: id
        });
    }
    else{
        res.status(200).json({
            message:'You passed an Id'
        });
    }
})
router.patch('/:productId',(req,res,next)=>
{
    
        res.status(200).json({
            message:'Updated Product'
        });
    
})
router.delete('/:productId',(req,res,next)=>
{
    
        res.status(200).json({
            message:'delete Product'
        });
    
})
module.exports=router;