const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://user:1234567p@SoftUni-niwzl.mongodb.net/rent-a-car?retryWrites=true&w=majority',
        adminId: '5f1e84fcfcdb160788779fa9',
        privateKey: "Victoria's secret",
        cookieName: 'oreo'
    },
    
    production: {}
};

module.exports = config[env];