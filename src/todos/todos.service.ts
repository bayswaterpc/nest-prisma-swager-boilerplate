import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({ data: createTodoDto });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findFiltered(completed?: boolean, descriptionContains?: string) {
    return this.prisma.todo.findMany({
      where: { completed, description: { contains: descriptionContains } },
    });
  }

  findOne(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: string) {
    try {
      return await this.prisma.todo.delete({ where: { id } });
    } catch (e) {
      throw e;
    }
  }
}
