
/*
you can run node in the terminal by entering:
node server 
OR
node fileName

 setting up the server environment...
1. ensure node is installed 
2. in terminal, init new project by entering command npm init -y
3. then packages: npm install nodemon dotenv
4. add additional info to package.json file... 
  "start": "node server",
  "dev": "nodemon server"
 5. you can now start server by typing npm run dev 
 6. init express js

only recent versions of node let us use import statements... HOWEVER, the require method is
essentially the same.

modals are a lot like classes and can be considered the same despite their obvious different uses

methods are ways to interact within the modal. they adhere to CRUD criteria.

methods + real world examples 
GET = to read

 */

const http = require('http');
require('dotenv').config();
const app = require('./app/app'); 

// Create the server and listen on the port from .env
http.createServer(app).listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
