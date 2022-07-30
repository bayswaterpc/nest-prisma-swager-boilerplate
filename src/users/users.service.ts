import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword, generateSalt } from '../common/crypto';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { password, email, birthday, firstname, lastname } = createUserDto;
    const salt = generateSalt();
    const hashed_ps = hashPassword(password, salt);
    const createdUser = await this.prisma.user.create({
      data: {
        email,
        birthday,
        firstname,
        lastname,
        password: hashed_ps,
        salt,
      },
    });
    return createdUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
function data(data: any, arg1: {}) {
  throw new Error('Function not implemented.');
}
