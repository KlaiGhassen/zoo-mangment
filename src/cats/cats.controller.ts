import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats-dtao';
import { CatsService } from './cats.service';
import { Cats } from './entity/Cats';
import { UopdateCatsDto } from './dto/updated-cats-dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cats[]> {
    return await this.catsService.getAllData();
  }
  @Get(':id')
  findOne(@Param() id: string): string {
    return `findOne ${id}`;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatsDto): Promise<Cats> {
    return await this.catsService.insertData(createCatDto);
  }
  @Patch()
  async update(@Body() updateCatsDto: UopdateCatsDto): Promise<Cats> {
    return await this.catsService.updateCats(updateCatsDto);
  }
}
