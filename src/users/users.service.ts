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
    const salt = await generateSalt();
    const hashed_ps = await hashPassword(password, salt);

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
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
  removeByEmail(email: string) {
    return this.prisma.user.delete({ where: { email } });
  }
  removeAll() {
    return this.prisma.user.deleteMany({});
  }
}
