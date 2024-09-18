import { Injectable } from '@nestjs/common';
import { Cats } from './entity/Cats';
@Injectable()
export class CatsService {
  private cats: Cats[] = [];

  //couche mitier
  insertData(cat: Cats): string {
    // insert data into database
    this.cats.push(cat);
    return 'data inserted correctly';
  }

  getAllData(): Cats[] {
    return this.cats;
  }
}
