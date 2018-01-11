# User_Login Web App

Technologies Used
------------------
  * Express is the framework.
  * Ejs is the templating engine.
  * Mongoose is object modeling for our MongoDB database.
  * Passport will help us authenticating with different methods.
  * Connect-flash allows for passing session flashdata messages.
  * Bcrypt-nodejs gives us the ability to hash the password.



Home Page
-------------
Home Page allows a USER to choose between 'Local Sign Up' or 'Local Login'

Reference-style: 
![Home Page](/images/Login_Home.png)

Sign Up Page
-------------
If the USER selects 'Local Signup' this page will render

The USER must create an email and password 

If email is already in Mongo DB page will ask USER to choose new email)

Login Page
-------------
If the USER selects 'Local Login' this page will render and the user must enter Login credentials 

If password is incorrect page will let user know

Profile Page
-------------
Once the USER has successfully Signed Up or Logged in this page will render and use ejs to show User ID, User Email, User Password.
Log out button will redirect to Home Page
