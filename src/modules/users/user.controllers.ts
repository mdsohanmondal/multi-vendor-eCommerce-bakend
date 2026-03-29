import { Request, Response } from 'express';
import {
  createUserServices,
  getUserServices,
  getUsersServices,
} from './user.service';
import { responseJSON } from '../../utils/response.data';

export const getAllUsers = async (_req: Request, res: Response) => {
  // finding all users
  const users = await getUsersServices();
  return responseJSON(res, {
    status: 200,
    success: true,
    data: users,
    count: users.length,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserServices(Number(id));
  return responseJSON(res, { data: user, status: 200, success: true });
};

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const newUser = await createUserServices(data);
  return responseJSON(res, { data: newUser, status: 201, success: true });
};
