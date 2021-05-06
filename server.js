const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

const users = [
  {_id: "1", email: "rob@rob.rob", password: "r123" },
  {_id: "2", email: "steve@steve.steve", password: "s123" },
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/users", (req, res) => res.json(users))

app.post("/login", (req, res) => {
  const { email, password } = req.body
  if(!email || !password) { return res.status(400).json({ error: "Please provide email & password" }) }

  const userFound = users.find(user => user.email == email && user.password == password)

  if(!userFound) { return res.status(400).json({ error: "Login failed. No user found" })}

  res.json(userFound)
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.