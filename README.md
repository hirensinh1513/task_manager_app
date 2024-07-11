Task Manager App.
A Task Manager application built with Node.js, Express, MongoDB, HTML, CSS, and JavaScript, providing CRUD APIs for managing tasks.

Create: Add new tasks with details such as title, description, due date, etc.
Read: Retrieve all tasks or a specific task by ID.
Update: Modify existing tasks, including changing status or due dates.
Delete: Remove tasks from the system.
HTML/CSS Frontend: Basic frontend for interacting with the API (optional).
Requirements
Node.js (v14 or later)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/hirensinh1513/task-manager-app.git
cd task-manager-app
Install dependencies: npm install

bash
Copy code
npm install
Configuration
Create a .env file in the root directory and add the following environment variables:

env
Copy code
PORT=3000
Ensure MongoDB is running on your machine or update MONGO_URI to your MongoDB instance URL.

Running the Application
Start the application: npm start

bash
Copy code
npm start
The application will be running at http://localhost:3000.

API Documentation
The application provides CRUD APIs for managing tasks. Detailed API documentation can be found in the project
