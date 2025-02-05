import { z } from 'zod';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SELLER = 'seller',
  BUYER = 'buyer',
}

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255).optional(),
  roles: z.array(z.nativeEnum(UserRole)),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  deletedAt: z.string().min(1).max(255).nullable(),
});

export type UserType = z.infer<typeof UserSchema>;
