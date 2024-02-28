
import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { getUsers, createUsers, updateUsers, deleteUsers } from "./controllers/userController"
import { createAuthors, deleteAuthors, getAuthors, updateAuthors } from "./controllers/authorController";
import { createBooks, deleteBooks, getBooks, updateBooks } from "./controllers/bookController";
import { createFavouriteBooks, deleteFavouriteBooks, getFavouriteBooks, updateFavouriteBooks } from "./controllers/favouriteBookController";
import { createLoans, deleteLoans, getLoans, updateLoans } from "./controllers/loanController";
import { register } from "./controllers/authController";


export const app: Application = express();

app.use(express.json());


app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: 'Server is healthy'
        }
    );
})

//roles routes
app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles/:id', updateRoles)
app.delete('/roles/:id', deleteRoles)

//users routes
app.get('/users', getUsers)
app.post('users', createUsers)
app.put('/users/:id', updateUsers)
app.delete('/users/:id', deleteUsers)

//authors routes
app.get('/authors', getAuthors)
app.post('authors', createAuthors)
app.put('/authors/:id', updateAuthors)
app.delete('/authors/:id', deleteAuthors)

//books routes
app.get('/books', getBooks)
app.post('books', createBooks)
app.put('/books/:id', updateBooks)
app.delete('/books/:id', deleteBooks)

//favourite books routes
app.get('/favouiteBooks', getFavouriteBooks)
app.post('favouiteBooks', createFavouriteBooks)
app.put('/favouiteBooks/:id', updateFavouriteBooks)
app.delete('/favouiteBooks/:id', deleteFavouriteBooks)

//loans routes
app.get('/loans', getLoans)
app.post('loans', createLoans)
app.put('/loans/:id', updateLoans)
app.delete('/loans/:id', deleteLoans)

//auth routes
app.post('/api/register', register)