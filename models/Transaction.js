const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const User =  require('./User');

const Transaction = sequelize.define('Transaction',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
       type:DataTypes.FLOAT,
       allowNull:false
    },
    transaction_type:{
        type:DataTypes.ENUM('DEPOSIT','WITHDRAWAL'),
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('PENDING','COMPLETED','FAILED'),
        defaultValue:'PENDING'
    },
    timestamp:{type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
});

Transaction.belongsTo(User,{foreignKey:'userId'});

Transaction.sync().then((data)=>{
    console.log(`Table and model synced Successfully`)
 }).catch((err)=>{
     console.log(err)
 })
 

module.exports=Transaction;