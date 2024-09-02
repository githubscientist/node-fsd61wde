# Nodejs- Day -1: Nodejs

## Contents

[x] What is nodejs?
[x] Npm packages

- In build
- Third party
- Custom

### What is nodejs?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

### Npm packages

Npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command-line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

#### Built-in packages

- `http` - To create a server
- `fs` - To work with file system
- `path` - To work with file paths
- `os` - To work with operating system

#### Third party packages

- `express` - Web application framework
- `mongoose` - MongoDB object modeling tool
- `axios` - Promise based HTTP client
- `nodemailer` - Send emails
- `dotenv` - Load environment variables
- `bcrypt` - Password hashing
- `jsonwebtoken` - JSON Web Token: to create access tokens
- `morgan` - HTTP request logger middleware
- `cors` - Cross-origin resource sharing: to enable CORS with various options
- `cookie-parser` - Parse cookie header and populate `req.cookies` with an object keyed by the cookie names
- `body-parser` - Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property
- `multer` - Middleware for handling `multipart/form-data`, which is primarily used for uploading files

#### Custom packages

- `logger` - To log all the requests and responses
- `auth` - To authenticate the user
- `db` - To connect to the database
- `mail` - To send emails
- `utils` - Utility functions

# Nodejs- Day -2: Nodejs & Express.js

## Contents

[x] What is express
[x] API methods - GET, POST, PUT, DELETE
[x] Request & response objects
[x] Url & Query parameters

### What is express

Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

### What is middleware

Middleware is a function that has access to the request object (req),

### Application: Job Portal

#### Features

- Companies can create an account
- Companies can post jobs
- Users can apply for jobs
- Users can view all the jobs
- Users can view all the jobs by company
- Users can view all the jobs by location
- Users can view all the jobs by skills

#### Database Model Design

##### Entities

- Company
- Job
- User
- Application

##### Relationships

- Company has many jobs
- Job belongs to a company
- User has many jobs
- Job belongs to a user
- Job has many applications
- Application belongs to a job
- Application belongs to a user

#### Attributes

##### Company

- Name
- Location
- Email
- Phone
- Website
- createdAt
- updatedAt

##### Job

- Title
- Description
- Location
- Salary
- Experience
- Skills
- Type
- CompanyId
- createdAt
- updatedAt

##### User

- Name
- Email
- Phone
- Password
- Role: user, manager, admin
- createdAt
- updatedAt

##### Application

- UserId
- JobId
- Status: applied, shortlisted, rejected
- createdAt
- updatedAt

#### API Endpoints

##### Company

- GET /companies - Get all companies
- GET /companies/:id - Get company by id
- POST /companies - Create a company
- PUT /companies/:id - Update a company
- DELETE /companies/:id - Delete a company

##### Job

- GET /jobs - Get all jobs
- GET /jobs/company/:id - Get all jobs by company id
- POST /jobs/company/:id - Create a job
- GET /jobs/:id - Get job by id
- PUT /jobs/:id - Update a job
- DELETE /jobs/:id - Delete a job

##### Authentication

Authentication is the process of verifying the identity of a user. It is the mechanism of associating an incoming request with a set of identifying credentials, such as the user the request came from, or the token that it was signed with.
