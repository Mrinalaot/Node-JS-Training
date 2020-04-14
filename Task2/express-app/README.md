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
[![Build Status](https://d6gf3w.sn.files.1drv.com/y4m9_ElTktyjCXSVFrd5X7-17fbOQLTbuebLLze6_mMitGSnEuB2t_t-PGUbNdYkQCL6dp9q_Z_pW5qgJqYBTnhMJ3xeCrL2gfJWwpPT5EpPIsS0V7sx81T71GGoY7nH8rQWFcivf27Lz9FyjzhjyJ2hg7faSeGQslXkagVY61fpC6tja7E5AHotVZnAJBQdFg6RE4TWZFmhpdyVpgIxmN3Og?width=950&height=420&cropmode=none)](https://travis-ci.org/joemccann/dillinger)

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
![Login Page](https://d6gg3w.sn.files.1drv.com/y4mcXCww7YLmdHzKza7CuQ6W7pz9h-GkXl4cGNwIGrabu6hWSezG2vToZo9J_7EcyyI3lOgbeg2bsGZavXvp5wSXQDRThVLYegxVr0Vl_P8ESt9A5-afjunKiIrkstdOAkM4DLi4uDWMZlBfJbkdK_Mg_mEtTTiqyT5M2tOyhpXjhY9sCDg-N1lFuKMjvBgtG8apJuP5n4eHIO3w0as_fnoDg?width=943&height=478&cropmode=none)

route: /register

![](https://d6gh3w.sn.files.1drv.com/y4m58NCGdlYwrzDFetZ3LtkbxkEgF53Y5yvRn2gMHUjp_mx9gD4T6HgdnE5qUp80l1FYzfOauRB5_DpMqonfqT98ZG1-ac7vTL-hSMiBx7wWB72w5wSUahKxVwKcQSXnBWBdFvIB5FwMyK9Dq_scmhNug8-x0DVhdeN_JBcLR6-LVrasZ9FSniIs9gFAj4LnIPFQFTRBpjGyaKOqlt53Cpe5w?width=941&height=597&cropmode=none)
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
![](https://d6gi3w.sn.files.1drv.com/y4mAYizvcikkxj-dgNkTrstDzu_nXch-FZMrhuBhrZMn40l_FIImqOp8rYWqXgF6V-45OrDPfNEA6maBJ88s5CLRjQSlBa_OYfeyel6Tt3vcQiqSzHIMSik1M19ugYPax59ba8d62T4pVSX3x9z-_9yLZTzF43cVw3fNnnaEBlwOnCp1XcIXZZg2TnIWOOG8QfHSLjHuau7XRhMayExcCrT2Q?width=1096&height=598&cropmode=none)
Mobile View -
![](https://d6gb3w.sn.files.1drv.com/y4mrhfO_1udgUnmZQFY8Fb1Xm1nf12h4w8i3tws4WcAuftk84Rd1HhyUZPeKMiucze-8ZjsR5WwlXEFPzN8jYXFLhlBjDh5nx06vjVsedoto0L4bHpBbHde_F-RhC_irPZDlq7ctWds--cJ7Nt4bCFiO3x8ZWUc1H0GMubB5sgIrDFWn1HNeIcLAN_9mifjOPgdhQvkb_AvXzaDDU41hmJ6fw?width=448&height=661&cropmode=none)


RESTful API design
all your APIs should have a prefix - /api

#### /api/user
  - GET, returns the details of user like email, fullname etc..
  - helpful to show in header
  - how to get current user? with the help of cookie username
  - this must be a protected route, so you will need a middleware to validate auth_token

#### /api/auth
  - POST, accepts username, password and sets cookies [username, auth_token] if successfull
  - returns error if invalid username or password
  - use this in page1 (login page) to submit un, pw
  - this must be open route

#### /api/posts
  - this is a GET, retuns list of posts for the given user
  - how do you identify the current user? with the help of cookie username.
  - you need to validate auth_token in a middleware as this route is protected
  - you will be using this in page2 to fetch and display posts

#### /api/posts/new
  - POST, takes post content as input and returns success or failure
  - if successfull, append the new post to beginning of the page (page2)
  - get the username from cookie and save it against him
  - don't forget that this is also a protected route and so cookie auth_token needs validation


### NOTE  
##### MySql DB is Used here for this Node Application

