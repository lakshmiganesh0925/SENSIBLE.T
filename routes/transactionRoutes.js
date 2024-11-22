const express = require('express');
const {
    createTransaction,
    getTransactions,
    getTransactionById,
    updatedTransactionStatus
} = require('../controllers/transactionController');

const router = express.Router();

router.post('/transactions',createTransaction);
router.get('/transactions',getTransactions);
router.get('/transactions/:transactionId',getTransactionById);
router.put('/transactions/:transactionId',updatedTransactionStatus);

module.exports=router;