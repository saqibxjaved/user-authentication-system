const { Router } = require('express');
const authController = require('../controllers/authController'); // 👈 Import your controller

const router = Router();

// Just point to the function, don't call it!
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

module.exports = router;