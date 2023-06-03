import { Router } from "express";
const router = Router();



// post Method
router.route('/register').post( (req,res) => res.json('register route'));
router.route('/registerMail').post( );
router.route('/authentication').post( );
router.route('/login').post( );


// Get Method
router.route('/user/:username').get( );

// put Method
router.route('/updateuser').put( );


export default router; 