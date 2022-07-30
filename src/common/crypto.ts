// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createHmac, randomBytes } from 'crypto';

export const hashPassword = (password: string, salt: string) => {
  const hash = createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
};

export const generateSalt = () => {
  return randomBytes(6).toString('hex').slice(0, 12);
};
