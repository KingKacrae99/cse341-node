const router = require('express').Router();
const controller = require('../controller');

/**************************************************
 *  Router middleware
 *************************************************/
router.use((req, res, next) => {
    now = new Date()
    console.log("Time:", now.toLocaleString());
    next();
});

router.get('/home', controller.home)
router.get('/profile', controller.profile)
router.get('/login', controller.login)
router.get('/logout', controller.logout)

module.exports = router 
