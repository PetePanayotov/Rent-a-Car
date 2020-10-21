const express = require('express');
const config = require('../config/config');
const router = express.Router();
const {getUsers , registerUser , loginUser , updatedUser , deleteUser , verifyUser , getUserWithCars} = require('../controllers/user');


router.get('/', async (req , res , next) => {
    
    await getUsers(req , res , next);

});

router.get('/:id' , async (req , res , next) => {
    
    await getUserWithCars(req , res , next);

});

router.post('/register' , async (req , res , next) => {
    
    await registerUser(req , res , next);

});

router.post('/login', async (req , res , next) => {
    
    await loginUser(req , res , next);

});

router.post('/verify' , async (req , res , next) => {

    await verifyUser(req , res , next);

});

router.put('/:id', async (req , res , next) => {

    await updatedUser(req , res , next);

});

router.delete('/:id', async (req , res , next) => {
    
    await deleteUser(req , res , next);
})

module.exports = router;