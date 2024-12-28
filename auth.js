const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../modules/user');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ username: newUser.name, token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ username: user.name, token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;




































/*
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../modules/user');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ username: newUser.name, token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ username: user.name, token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;



*/




























/*
const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const user=require('../modules/user');

const router=express.Router();

router.post('/register',async (req,res)=>{
    const{name,email,password}=req.body;
    try{
        const UserExists=await user.findone({email});
        if(UserExists)
        {
            return res.status(400).json({message:'user already exists'});
        }
        const user=new User({name,email,password});
    await user.save();
    
    const token=jwt.sign({id:user_id},
        process.env.JWT_SECRER,
        {expiresIn: '1h',}
    );
    res.status(201).json({username:user.username,token:token});

    }
    catch(error)
    {
        res.status(500).json({error:'server error'});
    }
});

//post : sign in
router.post('/login',async(req,res)=>

{
const {email,password}=req.body;
try{
    const user=await User.findOne({email});
    console.log(user)
    if(!user)
    {
        return res.status(400).json({message:'Invalid Email'})
    }
    const isMatch=await bcrypt.compare(password,user.password);
    console.log('password Match:',isMatch);
    if(isMatch)
    {
        return res.status(400).json({message:'Invalid Password'});
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h',});
    res.status(201).json({username:user.name,token:token});
    console.log(user.name)

}
catch(error)
{
    res.status(500).json({error:'server error'});
}
});
module.exports=router;
*/