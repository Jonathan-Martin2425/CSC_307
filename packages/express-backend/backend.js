import express from "express";
import cors from "cors";
import user_services from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/users/:_id", (req, res) => {
    const id = req.params["_id"]; //or req.params.id
    console.log(id);

    let result = user_services.findUserById(id);
    if (result === undefined) {
        res.status(404).send("Resource not found.");
    } else {
        result.then((r) => { res.send(r); })
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });
    }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/users", (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    //gives the list of users that match name AND job
    //if there's no or incorrect querry, returns whole user list instead
    let user = user_services.getUsers(name, job)
    user.then((u) => { res.send(u); })
        .catch((error) => {
            console.log(error);
            res.status(500).send();
        });
});

app.post("/users", (req, res) => {
    let userToAdd = req.body;
    user_services.addUser(userToAdd)
        .then((newUser) => {res.status(201).send(newUser); })
        .catch((error) => {
            console.log(error);
            res.status(500).send();
        });
});

app.delete("/users", (req, res) => {
    const userId = req.query._id;
    console.log(userId)
    if (userId != undefined) {
        user_services.deleteUser(userId).then((q) => { res.status(204).send(q); })
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });
    }else{
        res.status(404).send();
    }
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
