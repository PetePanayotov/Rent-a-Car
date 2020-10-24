const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const {cookieName , privateKey} = config;

const generateToken = async data => {
    const token = await jwt.sign(data , privateKey);
    return token;
};

const getUsers = async (req , res , next) => {

    try {
        
        const users = await User.find();
        
        if (!users) {
            throw new Error();
        };

        res.send(users);

    } catch (error) {
        next();
    };


};

const registerUser = async (req , res , next) => {

    const {name, email , phone , password , rePassword} = req.body;
    
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newUser = new User({
        name,
        email,
        phone,
        password,
        rePassword,
        password: hashedPassword
    });

    try {

        const userObj = await newUser.save();
       
        if (!userObj) {
            throw new Error();
        };

        const token = await generateToken({ 
            userId: userObj._id,
            username: userObj.username
        });

        res.status(200).header('Authorization' , token).send(userObj);

    } catch (error) {
        res.status(401)
        next();
    };
};

const loginUser = async (req , res , next) => {

    const {name , password} = req.body;

    try {
        
        const user = await User.findOne({name});

        if (!user) {
            res.status(401);
            throw new Error();
        };

        const passwordsMatch = await bcrypt.compare(password , user.password);
    
        if (passwordsMatch) {

            const userId = user._id.toString()
            
            const token = await generateToken({ 
                userId,
                name: user.name,
                isAdmin: user.isAdmin
            });
    
            res.status(200).header('Authorization' , token).send(user);

        }else{
            res.status(401).send('Invalid password');
            return;
        }
        
    } catch (error) {
        next();
    };

};

const verifyUser = async (req , res , next) => {

    const {token} = req.body;

    try {
        
        const decodeObj = jwt.verify(token , privateKey);

        if (!decodeObj) {
            throw new Error()
        }

        const {userId} = decodeObj;

        const user = await User.findOne({_id:userId});
        
        res.status(200).send(user);

    } catch (error) {
        res.status(401);
        next();
    }

};


const updatedUser = async (req , res , next) => {

    const {id} = req.params;
    const { username, password } = req.body;

    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newData = {
        username,
        password: hashedPassword
    }

    try {
        
        const updatedUser = await User.update({_id : id} , newData);

        if (!updatedUser) {
            throw new Error();
        };

        res.send(updatedUser);
        
    } catch (error) {
        next()
    };

};

const getRentedCars = async (req , res , next) => {

    const {id} = req.params;

    try {
        const user = await User.findOne({_id: id}).lean();

        if (!user) {
            throw new Error()
        };
        
        res.status(200).send(user);

    } catch (error) {
        res.status(503);
        next();
    };

};

const declineRent = async (req , res , next) => {

    const {carId , userId} = req.body;

    try {

        const user = await User.update({_id: userId} , {

            $pull: {
                rentCars: {carId: carId}
            }
            
        });

        if (!user) {
            throw new Error()
        };

        res.status(200).send(user);
        
    } catch (error) {
        res.status(503);
        next();
    }
};

const deleteUser = async (req , res , next) => {

    const {id} = req.params;

    try {

        const removedUser = await User.deleteOne({ _id: id});

        if (!removedUser) {
            throw new Error();
        };

        res.send(removedUser);

    } catch (error) {
        next();
    };
 
};

const getUserWithCars = async (req , res , next) => {

    const {id} = req.params;
    
    try {

        const user = await User.findById(id).populate('likedCars').lean();

        if (!user) {
            throw new Error();
        };

        res.send(user);
        
    } catch (error) {
        next();
    }

}


module.exports = {
    getUsers,
    registerUser,
    loginUser,
    updatedUser,
    deleteUser,
    verifyUser,
    declineRent,
    getRentedCars,
    getUserWithCars
}
