import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats-dtao';
import { CatsService } from './cats.service';
import { Cats } from './entity/Cats';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cats[]> {
    return this.catsService.getAllData();
  }
  @Get(':id')
  findOne(@Param() id: string): string {
    return `findOne ${id}`;
  }
  @Post()
  create(@Body() createCatDto: CreateCatsDto): string {
    return this.catsService.insertData(createCatDto);
  }
}
