// AFter modifying and importing modules always start with creating Routes first then Controllers for the routes - views will have to be created before anyway

import {Router} from 'express'

const router = Router();

router.get('/login', DisplayLoginPage);
// Processing when collecting information will always be a post - in this case Login Page
router.post('/login', ProcessLoginPage);

router.get('/register', DisplayRegisterPage);
// Processing when collecting information will always be a post - in this case registration page
router.post('/register', ProcessRegisterPage);


// Process Logout page
router.get('/logout', ProcessLogoutPage )

export default router;
