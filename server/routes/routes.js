import express from 'express';
import { Register } from '../controller/userController.js';
const router = express.Router();
import { body } from 'express-validator'


router.post('/register', [
    body('name').trim().notEmpty().withMessage("Name should not be empty"),
    body('email').trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Invalid Email !!!"),
    body('password').trim().notEmpty().withMessage("Password should not be empty").isLength({min: 5, max: 30}).withMessage("Password Length be 5-30")
], Register)

export {router as Router}