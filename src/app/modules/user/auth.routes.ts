import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.CUSTOMER
  ),
  UserController.getSingleUserByToken
);
router.post(
  '/signup',
  validateRequest(UserValidation.createUserValidation),
  UserController.createUser
);
router.post(
  '/signin',
  validateRequest(UserValidation.signinUserValidation),
  UserController.loginUser
);

export const UserRoutes = router;
