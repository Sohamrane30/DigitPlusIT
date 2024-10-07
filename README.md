# DigitPlusIT 

(Install NODE before running the code)
Sim Card Activation Service. (Note: This is not a working service and does not run as it could only be partially implemented in the alotted time)

Initial Plan for this service:
Database Modelling: MongoDB
API Development: RestAPI
Error Handling and Database Connection: Node.js

Challenges faced during development:
The PCs were not equiped with the frameworks and applications required for developement such as Node, MongoDB, etc. Which had to installed and configured from stratch.

Current Implementation includes:
index.js: Acts as a middleware and integrates MongoDB with Node.
routes/Routes.js : Implements the Activation, Deactivation and Verification of Sim Cards and their status using JavaScript and updates them in the MongoDB Database.
models/SimCard.js: Provides a model for the writing and reading of Simcard data in mongoDB. Defines attributes and data types.

Implementation to be completed:
MongoDB Database Setup and Integration.
Deployment.
Testing.
