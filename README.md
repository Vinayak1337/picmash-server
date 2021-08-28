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

/user - to handle authentication
  - [POST /create](https://picmash-server.herokuapp.com/user/create) - To register a new user
  - [POST /get](https://picmash-server.herokuapp.com/user/get) - to sign in an existing user
  - [PUT /update](https://picmash-server.herokuapp.com/user/update) - to update user data
  - [DELETE /delete](https://picmash-server.herokuapp.com/user/delete) - to delete an user

/posts - To handle post requests
  - [GET /](https://picmash-server.herokuapp.com/posts/) - To send all the posts
  - [POST /](https://picmash-server.herokuapp.com/posts/) - to create a new post
  - [DELETE /](https://picmash-server.herokuapp.com/posts/) - to delete an existing post

[/verify POST](https://picmash-server.herokuapp.com/verify/) - To verify an username or email if they already exist in the database before creating a new user and notify in real time

/images - To handle post images to the database
  - [POST /](https://picmash-server.herokuapp.com/images/) - To store an image
  - [GET /](https://picmash-server.herokuapp.com/images/) - To stream an image to the url. [For Example](https://image-recognition-server.herokuapp.com/avatar/6054d4365446742d3c310d031629882082615.jpeg)
  - [DELETE /](https://picmash-server.herokuapp.com/images/) - To delete an image from the database