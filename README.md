Task: Build a Simple "Transaction Management" API
Objective:
You are required to create a Node application to manage financial transactions. The system should support operations like creating transactions, viewing transaction history, and updating transaction status.
1. Transaction Model
Create a Sequelize model for a Transaction that represents a financial transaction with the following fields:
amount: A DecimalField that stores the monetary value of the transaction.
transaction_type: A CharField with the values DEPOSIT or WITHDRAWAL to indicate the type of transaction.
user: A ForeignKey to the built-in User model, indicating the user associated with the transaction.
timestamp: A DateTimeField that stores the date and time of the transaction. 
status: A CharField with values:
PENDING
COMPLETED
FAILED


TO work project need to install node package we use the express sequlize mysql2
Express is node framework to with api in server-side
mysql is database to store table in the database
Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.

3. API Endpoints
Use Express REST Framework (ERF) to implement the following API endpoints for the Transaction model:

         POST /api/transactions/
     Description: Create a new transaction.
     Request Body:
     amount: The monetary value of the transaction (e.g., 150.00).
     transaction_type: Either DEPOSIT or WITHDRAWAL.
     user: The ID of the user who initiated the transaction (e.g., user_id).
     Response: Return the newly created transaction, including fields such as transaction_id, amount, transaction_type, status, and timestamp.

         GET /api/transactions/
      Description: Retrieve all transactions for a specific user.
      Query Parameter: user_id: The ID of the user whose transactions are being fetched.
      Response: Return a list of transactions for that user, showing transaction_id, amount, transaction_type, status, and timestamp.

         PUT /api/transactions/{transaction_id}/
      Description: Update the status of an existing transaction.
      Request Body:
      status: The new status, which must be either COMPLETED or FAILED.
      Response: Return the updated transaction, including transaction_id, amount, transaction_type, status, and timestamp.

         GET /api/transactions/{transaction_id}/
      Description: Retrieve the details of a specific transaction by its transaction_id.
      Response: Return the transaction’s details, including transaction_id, amount, transaction_type, status, and timestamp.
Example Input and Output
1. POST /api/transactions/
Request:
{
  "amount": 100.00,
  "transaction_type": "DEPOSIT",
  "user": 1  
}

Response:
{
  "transaction_id": 1,  
  "amount": 100.00,
  "transaction_type": "DEPOSIT",
  "status": "PENDING",
  "user": 1,  
  "timestamp": "2024-11-16T10:30:00Z"
}

2. GET /api/transactions/?user_id=1
Response:

{
  "transactions": [
{
    "transaction_id": 1,
      "amount": 100.00,
      "transaction_type": "DEPOSIT",
      "status": "PENDING",
      "timestamp": "2024-11-16T10:30:00Z"
    },
    {
      "transaction_id": 2,
      "amount": 50.00,
      "transaction_type": "WITHDRAWAL",
      "status": "COMPLETED",
      "timestamp": "2024-11-15T15:00:00Z"
    }
  ]
}

3. PUT /api/transactions/1/
Request:
{
  "status": "COMPLETED"
}

Response:
{
  "transaction_id": 1,
  "amount": 100.00,
  "transaction_type": "DEPOSIT",
  "status": "COMPLETED",
  "timestamp": "2024-11-16T10:30:00Z"
}

4. GET /api/transactions/1/
Response:
{
  "transaction_id": 1,
  "amount": 100.00,
  "transaction_type": "DEPOSIT",
  "status": "COMPLETED",
  "timestamp": "2024-11-16T10:30:00Z"
}





