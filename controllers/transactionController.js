const { where } = require('sequelize');
const Transaction = require('../models/Transaction');

exports.createTransaction = async(req,res) => {
    const{amount,transaction_type,userId} =req.body;
    try{
        const transaction  = await Transaction.create({
            amount,transaction_type,userId
        });
        res.status(201).json(transaction);
    }catch(err){
        res.status(400).json({err:err.message});
    }
};

exports.getTransactions = async(req,res)=>{
    const {userId} = req.query;
    try{
        const transactions= await Transaction.findAll({where:{userId}});
        res.status(200).json(transactions);
    }catch(err){
        res.status(400).json({err:err.message});
    }
};

exports.getTransactionById  = async(req,res)=>{
    const {transactionId} = req.params;
    try{
        const transaction = await Transaction.findByPk(transactionId);
        if(transaction) res.status(200).json(transaction);
        res.status(404).json({error:`Transaction not found`});
    }catch(err){
        res.status(400).json({err:err.message});
    }
};

exports.updatedTransactionStatus = async(req,res)=>{
    const {transactionId} = req.params;
    const {status} =req.body;
    try{
        const transaction = await Transaction.findByPk(transactionId);
        if(!transaction) res.status(404).json({error:`Transaction not found`});
        transaction.status =status;
        await transaction.save();
        res.status(200).json(transaction);
    }catch(err){
        res.status(400).json({err:err.message});
    }
};