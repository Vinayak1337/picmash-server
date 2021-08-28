## picmash-server

Picmash backend server for [Picmash website](https://picmash.netlify.com)! (currently under maintenance)

Currently live! Access [here](https://picmash-server.herokuapp.com)

Written in javaScript & node.js.
Used packages:
 - Express.js - to create a Restful api
 - mongoose - to handle CRUD operations in the mongodb
 - multer, multer-gridfs-storage, gridfs-storage - to store, delete & stream images into the mongodb database
 - argon2 - to convert passwords into hash codes & verify them