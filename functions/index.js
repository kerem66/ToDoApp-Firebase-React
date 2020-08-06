const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

const { getAllTodos } = require("./APIs/todos");

const { getOneTodo } = require("./APIs/todos");

const { postOneTodo } = require("./APIs/todos");

const { deleteTodo } = require("./APIs/todos");

const { editTodo } = require("./APIs/todos");

const { loginUser } = require("./APIs/users");

const { signUpUser } = require("./APIs/users");

const { uploadProfilePhoto } = require("./APIs/users");

const { getUserDetail } = require("./APIs/users");

const { updateUserDetails } = require("./APIs/users");

// Users
app.post("/login", loginUser);

app.put("/user", auth, updateUserDetails); //it was post request i changed it as PUT request ofr further errors

app.get("/user", auth, getUserDetail);

app.post("/user/image", auth, uploadProfilePhoto);

app.post("/signup", signUpUser);

// Todo Requests
app.put("/todo/:todoId", auth, editTodo);

app.delete("/todo/:todoId", auth, deleteTodo);

app.post("/todo", auth, postOneTodo);

app.get("/todos", auth, getAllTodos);

app.get("/todo/:todoId", auth, getOneTodo);

exports.api = functions.https.onRequest(app);
