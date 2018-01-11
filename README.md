# User_Login Web App

Technologies Used
==========
  * Express is the framework.
  * Ejs is the templating engine.
  * Mongoose is object modeling for our MongoDB database.
  * Passport will help us authenticating with different methods.
  * Connect-flash allows for passing session flashdata messages.
  * Bcrypt-nodejs gives us the ability to hash the password.

Home Page
==========
Home Page allows a user to choose between 'Local Sign Up' or 'Local Login':
![Home Page](/images/Login_Home.png)

Sign Up Page
==========
If the USER selects 'Local Signup' this page will render and the user must create an email and password:
![Home Page](/images/Login_SIgnup.png)

If email is already in Mongo DB page will ask user to choose new email:
![Home Page](/images/Login_emailTaken.png) 

Login Page
==========
If the USER selects 'Local Login' this page will render and the user must enter Login credentials: 
![Home Page](/images/Login_Login.png)

If PASSWORD IS INCORRECT page will let user know:
![Home Page](/images/Login_wrongPassword.png)

Profile Page
==========
Once the user has successfully Signed Up or Logged in this page will render and use ejs to show User ID, User Email, User Password.
Log out button will redirect to Home Page:
![Home Page](/images/Login_profile.png)
