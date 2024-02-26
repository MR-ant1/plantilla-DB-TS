
import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { getUser, createUser, updateUser, deleteUser } from "./controllers/userController"


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

//user routes
app.get('/user', getUser)
app.post('user', createUser)
app.put('/user/:id', updateUser)
app.delete('/user/:id', deleteUser)


