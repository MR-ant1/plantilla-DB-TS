
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
app.get('/user', getUsers)
app.post('user', createUsers)
app.put('/user/:id', updateUsers)
app.delete('/user/:id', deleteUsers)

//authors routes
app.get('/author', getAuthors)
app.post('author', createAuthors)
app.put('/author/:id', updateAuthors)
app.delete('/author/:id', deleteAuthors)

//books routes
app.get('/book', getBooks)
app.post('book', createBooks)
app.put('/book/:id', updateBooks)
app.delete('/book/:id', deleteBooks)

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