const express = require('express')
const router = express.Router()
const User = require('../models/user')

// getting all
router.get('/',async(req,res) => {
    try{
        const users = await User.find()
        res.json(users) //if succeed, send all the requests back to the user
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

// getting one, set the middle ware to getUser, get the json version of that user
router.get('/new', getUser,(req,res) => {
    res.json(res.user)
})

// POST Create: creating one, send success code 201 which means sth is created
router.post('/', async(req,res) => {
    // define a user and set properties according to the form
    const user = new User({
        lastName : req.body.lastName,
        firstName : req.body.firstName,
        dateOfBirth : req.body.dateOfBirth,
        address1 : req.body.address1,
        address2 : req.body.address2,
        city : req.body.city,
        postalCode : req.body.postalCode,
        country : req.body.country,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        userNotes : req.body.userNotes
    })
    try {
        // console.log(req.body.lastName)
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch (err){
        res.status(400).json({message:err.message})
    }
    
})


// show user by id, set the middle ware to getSubscriber, get the json version of that subscriber
router.get('/users/:id', getUser,(req,res) => {
    res.json(res.user)
})

// Edit user by id
// router.get('/:id/edit', async (req,res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         res.render('users/edit', {user : user})
//     } catch {
//         res.redirect('/users')
//     }
   
// })

// update user by id, using patch instead of put , do not need to update all info, only update the required field
router.patch('/users/:id', getUser, async (req,res) => {


    if (req.body.lastName != null){
        res.user.lastName = req.body.lastName
    }
    if (req.body.firstName != null){
        res.user.firstName = req.body.firstName
        
    }
    if (req.body.dateOfBirth != null){
        res.user.dateOfBirth = req.body.dateOfBirth
    }
    if (req.body.address1 != null){
        res.user.address1 = req.body.address1
    }
    if (req.body.address2 != null){
        res.user.address2 = req.body.address2
    }
    if (req.body.city != null){
        res.user.city = req.body.city
    }
    if (req.body.postalCode != null){
        res.user.postalCode = req.body.postalCode
    }
    if (req.body.country != null){
        res.user.country = req.body.country
    }
    if (req.body.phoneNumber != null){
        res.user.phoneNumber = req.body.phoneNumber
    }
    if (req.body.email != null){
        res.user.email = req.body.email
    }
    if (req.body.userNotes != null){
        res.user.userNotes = req.body.userNotes
    }
    try {
        // save the object
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }catch  (err){
       res.status(400).json({message:err.message})
    }
})

// delete user by id
router.delete('/users/:id', getUser, async(req,res) => {
    try {
        await res.user.remove()
        res.json({message:'Deleted User'})
    }catch(err) {
       res.status(500).json({message:err.message})
    }
})

// function getUser()
//get user by id, if no user then leave that page
async function getUser(req,res,next){
    let user
    try {
        user = await User.findById(req.params.id)


        if (user == null){
            return res.status(404).json({message: 'Cannot find user'})
        }
    }catch (err){
        return res.status(500).json({message:err.message})
    }
    res.user = user
    next()
}

// export the router
module.exports = router