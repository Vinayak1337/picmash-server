## picmash-server

Picmash backend server for [Picmash website](https://picmash.netlify.com)! (currently under maintenance)

Currently live! Access [here](https://picmash-server.herokuapp.com)

Written in javaScript & node.js.
Used packages:
 - Express.js - to create a Restful api
 - mongoose - to handle CRUD operations in the mongodb
 - multer, multer-gridfs-storage, gridfs-storage - to store, delete & stream images into the mongodb database
 - argon2 - to convert passwords into hash codes & verify them

Routes
 - /user - to handle authentication
  - POST /create - To register a new user
  - POST /get - to sign in an existing user
  - PUT /update - to update user data
  - DELETE /delete - to delete an user
 - /posts - To handle post requests
  - GET / - To send all the posts
  - POST / - to create a new post
  - DELETE / - to delete an existing post
 - /verify POST - To verify an username or email if they already exist in the database before creating a new user and notify in real time
 - /images - To handle post images to the database
  - POST / - To store an image
  - GET / - To stream an image to the url
  - DELETE / - Tp delete an image from the database