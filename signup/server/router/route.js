import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController';

// post Method
router.route('/register').post(controller.register);
// router.route('/registerMail').post( );
router.route('/authentication').post((req,res)=> res.end());
router.route('/login').post(controller.login);


// Get Method
router.route('/user/:username').get(controller.getUser );

// put Method
router.route('/updateuser').put(controller.updateUser);


export default router; 