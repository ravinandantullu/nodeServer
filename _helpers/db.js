const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb://localhost/users",
        { useNewUrlParser: true }
    )
    .then(() => console.log("Connected to MongoDb"))
    .catch(err => console.log("Could not connect to MongoDb...", err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});
const User = mongoose.model("Users", userSchema);

async function getUserData(req, res, next) {
    try {
        return await getUsers()
            .then((value) => {
                return value;
            })
    } catch (e) {
        res.json({ error: { msg: _.get(e, 'message', 'Unknown error') } });
    }
}

// Register User.
async function registerUser(req, res, next) {
    try {
        const users = new User({
            username: req.body.username,
            password: req.body.password
        });
        const result = await users.save();
        res.json({ message: result });
    } catch (e) {
        e.code === 11000 ? res.json({ error: "Username already exits." }) : res.json({ message: "Unknown error." });
    }
}

// Get the details of the users.
async function getUsers() {
    return await User.find();
}

module.exports = {
    getUserData,
    registerUser
};
