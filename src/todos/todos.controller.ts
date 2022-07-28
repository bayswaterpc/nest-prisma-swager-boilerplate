import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('todos')
@ApiTags('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @ApiQuery({
    name: 'completed',
    required: false,
    type: Boolean,
  })
  @ApiQuery({
    name: 'descriptionContains',
    required: false,
    type: String,
  })
  @Get('filtered')
  findFiltered(
    @Query('completed') completed: string | undefined,
    @Query('descriptionContains') descriptionContains: string | undefined,
  ) {
    let isCompleted: boolean | undefined = undefined;
    if (completed !== undefined) {
      isCompleted = completed == 'true';
    }
    return this.todosService.findFiltered(isCompleted, descriptionContains);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.todosService.remove(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
