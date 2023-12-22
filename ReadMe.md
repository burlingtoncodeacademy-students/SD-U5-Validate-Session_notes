# Notes
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Before Getting Started
- **Postman** is installed. Download link below.
- **Nodemon** is installed. Download link below.
- **MongoDB** is installed. Download link below.
- **Mongo Compass** is installed. Download link below.

### Topics Covered
- Middleware
  - Validate Session
- Authentication

### What Should Already Be Understood
- Postman Routes
- JWT
- Models / Schema 

## Files / Folders in this Lesson
- controllers
  - `user.controller.js`
  - `movie.controller.js` (will update)
- helpers
  - `index.js` (solution from previous challenge)
- models
  - `user.model.js`
  - `movie.model.js` (will update)
- `.gitignore`
- `app.js`
- `example.env`
  - `.env` will need to be included if cloned.
- `package.json`
- `notes.md`

1. If this repo is cloned, be sure to run `npm install` within the project folder to install all dependencies within `package.json`. This will add the `node_modules` necessary to the project.

## Resources
- [Mongoose Documentation](https://mongoosejs.com/docs/api/document.html#Document.prototype.save)
- [Mongoose Validation](https://mongoosejs.com/docs/validation.html)
- [JWT](https://jwt.io/#debugger-io)
- [jsonwebtoken npm](https://www.npmjs.com/package/jsonwebtoken)
- Downloads:
  - [Postman Download](https://www.postman.com/downloads/)
  - [npm](https://www.npmjs.com/)
  - [Nodemon](https://nodemon.io/)
  - [How to Install MongoDB Video](https://www.loom.com/share/23f358e7221048748b433e4f5fd8c83a?sid=209f37ae-1e2f-47a4-a726-06829a1a73da)
  - [MongoDB Community](https://www.mongodb.com/try/download/community)
  - [MongoDB Compass](https://www.mongodb.com/try/download/compass)

# Challenge
- Consider the `helpers` functions, modify these to consider how you can provide the proper response with the `user.controller.js` routes. You will need to modify the functions (think conditional) and possibly adding more parameters to consider.