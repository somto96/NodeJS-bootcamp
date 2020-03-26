const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');

// Create user endpoint
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    // Try and Catch for handling individual errors resulting from failed promises
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //     res.status(400).send(error);
    // })
    // console.log(req.body); // Outputs the incoming JSON from POST request already stored in an object
    // res.send('testing!');
})

// User Login endpoint
router.post('/users/login',  async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

// Get all users endpoint
router.get('/users/me', auth,  async (req, res) => {

    res.send(req.user)
    // try {
    //     const users = await User.find({})
    //     res.send(users);
    // } catch (e) {
    //     res.status(500).send();
    // }
    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

// Get user by id endpoint
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send("Error: User not found!");
        }

        res.send(user);
    } catch (e) {
        res.status(500).send();
    }

    // User.findById(_id).then((user)=>{
    //     if(!user){
    //         return res.status(404).send();
    //     }

    //     res.send(user);
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})

// Update user endpoint
router.patch('/users/:id', async (req, res) => {
    // Test for unknown updates
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'age', 'email', 'password'];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({
            error: 'Invalid updates!'
        });
    };

    try {
        const user = await User.findById(req.params.id);
        updates.forEach((update) => user[update] = req.body[update])
        await user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        // If user is not found 
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

// Delete user endpoint
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send("Error: User not found!");
        }

        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;