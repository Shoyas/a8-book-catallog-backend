import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.string().optional(),
    contactNo: z.string({
      required_error: 'ContactNo is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    profileImg: z.string().optional(),
  }),
});
const signinUserValidation = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const UserValidation = {
  createUserValidation,
  signinUserValidation,
};
