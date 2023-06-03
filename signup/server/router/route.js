import { Router } from "express";
const router = Router();

// post method
router.route('/register').post((req,res)=> res.json('register route'));
router.route('/registerMail').post()
router.route('/authentication').post()
router.route('/login').post()
// get method 
router.route('/user/:username').get()


// put method
router.route('/updateuser').put()

export default router;