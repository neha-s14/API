const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>
{
res.status(200).json({
    message:'Your orders were fetched'
});
});

router.post('/',(req,res,next)=>
{
    const order={
        productId: req.body.productId,
        quantity: req.body.quantity
    }
res.status(201).json({
    message:'Your orders were created',
    order:order
});
});

router.get('/:orderId',(req,res,next)=>
{
    const id=req.params.orderId;
    if(id==='special'){
res.status(200).json({
    message:`Your orders were fetched with order id ${id}`
});
    }
    else{
        res.status(200).json({
            message:'Your orders were fetched with id'
        })
    }
});
router.delete('/:orderId ',(req,res,next)=>
{
res.status(200).json({
    message:'Your orders were deleted'
});
});


module.exports=router;
