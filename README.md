# Picmash Server

Picmash backend server for the [Picmash website](https://picmash-app.netlify.com). This server is written in JavaScript using Node.js and is hosted at [https://picmash-server.onrender.com](https://picmash-server.onrender.com).

## Technologies Used

- **JavaScript & Node.js**: Core technologies for the backend.
- **Express.js**: Used to create a RESTful API.
- **Mongoose**: Handles CRUD operations with MongoDB.
- **Multer, Multer-GridFS-Storage, GridFS-Storage**: Manages storage, deletion, and streaming of images in the MongoDB database.
- **Argon2**: Converts passwords into hash codes and verifies them.

## API Routes

### User Authentication

- [POST /create](https://picmash-server.onrender.com/user/create) - Register a new user.
- [POST /get](https://picmash-server.onrender.com/user/get) - Sign in an existing user.
- [PUT /update](https://picmash-server.onrender.com/user/update) - Update user data.
- [DELETE /delete](https://picmash-server.onrender.com/user/delete) - Delete a user.

### Posts

- [GET /](https://picmash-server.onrender.com/posts/) - Retrieve all posts.
- [POST /](https://picmash-server.onrender.com/posts/) - Create a new post.
- [DELETE /](https://picmash-server.onrender.com/posts/) - Delete an existing post.

### Verification

- [POST /verify](https://picmash-server.onrender.com/verify/) - Verify if a username or email already exists in the database.

### Image Handling

- [POST /](https://picmash-server.onrender.com/images/) - Store an image.
- [GET /](https://picmash-server.onrender.com/images/) - Stream an image to the URL.
- [DELETE /](https://picmash-server.onrender.com/images/) - Delete an image from the database.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Vinayak1337/picmash-server.git
   ```

2. Navigate to the directory:
   ```bash
   cd picmash-server
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGODB_URI=YOUR_MONGODB_URI
   PORT=5000
   BASE_URL=http://localhost:5000
   ```

4. Install the required packages and start the server:
   ```bash
   npm install
   npm start
   ```

## License

This project is licensed under the terms of the [MIT License](https://github.com/Vinayak1337/picmash-server/blob/master/LICENSE).
