const express = require("express")
const router = express.Router()
const { checkApiKey } = require("../middleware/checkApiKey")
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/userControllers")

router.get("/users", checkApiKey, getAllUsers)

router.post("/users", checkApiKey, createUser)

// PUT METHOD
router.put("/users/:id", checkApiKey, updateUser)

// DELETE METHOD
router.delete("/users/:id", checkApiKey, deleteUser)


module.exports = router