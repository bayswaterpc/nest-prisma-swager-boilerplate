// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};

export const generateSalt = async () => {
  return await bcrypt.genSalt();
};
