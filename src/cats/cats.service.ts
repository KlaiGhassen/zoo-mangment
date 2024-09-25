import { Injectable } from '@nestjs/common';
import { Cats } from './entity/Cats';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatsDto } from './dto/create-cats-dtao';
import { UopdateCatsDto } from './dto/updated-cats-dto';
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cats.name) private catsModel: Model<Cats>) {}

  //couche mitier
  insertData(cat: CreateCatsDto): Promise<Cats> {
    // insert data into database
    return this.catsModel.create(cat);
  }

  getAllData(): Promise<Cats[]> {
    return this.catsModel.find().populate('owner').exec();
  }
  async updateCats(updateCatsDto: UopdateCatsDto): Promise<Cats> {
    return this.catsModel.findOneAndUpdate(updateCatsDto, { new: true }).exec();
  }
}
