import { genSalt, hash } from 'bcrypt';

export async function hashPassword(password: string) {
  const salt = await genSalt();
  return await hash(password, salt);
}
