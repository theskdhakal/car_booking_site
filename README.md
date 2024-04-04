CarQuest - Luxury Car Rental Site
CarQuest is a full stack web application for renting luxury cars. It provides a user-friendly interface for users to register, login, and rent cars. The project uses React for the frontend, Node.js and Express for the backend, MongoDB for the database, AWS S3 for image uploading, authentication middleware for security, Nodemailer for email verification, and Stripe for payment processing.

Features
User registration and login
Password reset functionality
Email verification using Nodemailer
Secure authentication middleware
Image uploading using AWS S3
Stripe integration for payments
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/theskdhakal/car_booking_site
Install dependencies:

bash
Copy code
cd carquest
npm install
Set up environment variables:

Create a .env file in the root directory
Add the following variables:
makefile
Copy code
PORT=3000
MONGODB_URI=your_mongodb_uri
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_aws_bucket_name
STRIPE_SECRET_KEY=your_stripe_secret_key
Run the application:

bash
Copy code
npm start
Usage
Visit http://localhost:3000 in your browser to access the application
Register or login to your account
Browse available cars and rent one
Upload images of your luxury car for listing
Technologies Used
React
Node.js
Express
MongoDB
AWS S3
Nodemailer
Stripe
Contributing
Contributions are welcome! Please create a new branch and submit a pull request for review.

License
This project is licensed under the MIT License - see the LICENSE file for details.

