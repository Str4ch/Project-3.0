const express = require('express');
const app = express();
const port = 3000;
console.log('test')


const usersRouter = require("./routes/users.js")

app.use(express.json())
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
	)
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next()
})

app.use("/api/", usersRouter)

app.get("/", (req, res)=>{
	res.json({"msg":"hello"})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



//Open your browser and go to http://localhost:3000. 
// You should see the message "Welcome to our simple REST API!"


