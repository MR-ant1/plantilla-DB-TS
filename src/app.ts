
import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { getUsers, createUsers, getUserById, updateUsersById, deleteUsersById } from "./controllers/userController"
import { createAuthors, deleteAuthors, getAuthors, updateAuthors } from "./controllers/authorController";
import { createBooks, deleteBooks, getBooks, updateBooks } from "./controllers/bookController";
import { createFavouriteBooks, deleteFavouriteBooks, getFavouriteBooks, updateFavouriteBooks } from "./controllers/favouriteBookController";
import { createLoans, deleteLoans, getLoans, updateLoans } from "./controllers/loanController";
import { login, register } from "./controllers/authController";
import { auth } from "./middlewares/auth";


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
app.get('/api/roles', getRoles)
app.post('/api/roles', createRoles)
app.put('/api/roles/:id', updateRoles)
app.delete('/api/roles/:id', deleteRoles)

//users routes
app.get('/api/users', auth, getUsers)
app.post('api/users', createUsers)
app.delete('/api/users/:id', deleteUsersById)
app.get('/api/users/:id', getUserById)
app.put('/api/users/:id', updateUsersById)

//authors routes
app.get('/api/authors', getAuthors)
app.post('/api/authors', createAuthors)
app.put('/api/authors/:id', updateAuthors)
app.delete('/api/authors/:id', deleteAuthors)

//books routes
app.get('/api/books', getBooks)
app.post('/api/books', createBooks)
app.put('/api/books/:id', updateBooks)
app.delete('/api/books/:id', deleteBooks)

//favourite books routes
app.get('/api/favouiteBooks', getFavouriteBooks)
app.post('api/favouiteBooks', createFavouriteBooks)
app.put('/api/favouiteBooks/:id', updateFavouriteBooks)
app.delete('/api/favouiteBooks/:id', deleteFavouriteBooks)

//loans routes
app.get('/api/loans', getLoans)
app.post('api/loans', createLoans)
app.put('/api/loans/:id', updateLoans)
app.delete('/api/loans/:id', deleteLoans)

//auth routes
app.post('/api/register', register)
app.post('/api/login', login)