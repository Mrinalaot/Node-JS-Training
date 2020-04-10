# PRE EXERCISE

1. understand express
2. create a sample app / express-generator

3. couple of pages (public)
  landing page - index.html / welcome message & user profile button
  user profile page - full name, email, address.... (by fetching from API)

4. /api (app.use, grouping)
    /userprofile - return JSON (user object)


# EXERCISE
----------

create a site with following pages.

## page 0: (landing page)

route: /

-------------------------------------
logo                    email signout
-------------------------------------

        Some welcome message
	[LOGIN] or [MY PROFILE]

-------------------------------------

note, in header you show email if user logged in, else show login
in content, have login or my profile buttons based on the session again


## page 1: (login page)

route: /login

if user clicks login in the previous page
check if user has already logged in, if so redirect him to page 2 (user profile)
if not, show the following form

-------------------------------------
logo			
-------------------------------------

	username ___________
	password ___________
	[Login]

-------------------------------------

## page 2:

route: /:username

when you visit the route, check session again
if not loggedin, take user to login page

-------------------------------------
logo			email signout
-------------------------------------

	new post
	[		  ]  <- text input
	[POST]  <- button
	-------------------

	post1
	username: post details
	in multiple lines

	post2
	username: post details
        in multiple lines

	post3....

-------------------------------------


RESTful API design
all your APIs should have a prefix - /api

/api/user
  - GET, returns the details of user like email, fullname etc..
  - helpful to show in header
  - how to get current user? with the help of cookie username
  - this must be a protected route, so you will need a middleware to validate auth_token

/api/auth
  - POST, accepts username, password and sets cookies [username, auth_token] if successfull
  - returns error if invalid username or password
  - use this in page1 (login page) to submit un, pw
  - this must be open route

/api/posts
  - this is a GET, retuns list of posts for the given user
  - how do you identify the current user? with the help of cookie username.
  - you need to validate auth_token in a middleware as this route is protected
  - you will be using this in page2 to fetch and display posts

/api/posts/new
  - POST, takes post content as input and returns success or failure
  - if successfull, append the new post to beginning of the page (page2)
  - get the username from cookie and save it against him
  - don't forget that this is also a protected route and so cookie auth_token needs validation


NOTE:
for storing posts, user details...
you can simple use javascript objects and arrays

as an optional task, I recommend you to try working with databases such as mysql once you are complete

