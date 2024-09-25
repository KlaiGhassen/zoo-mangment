import { IsString } from 'class-validator';
import { Owner } from 'src/owner/entities/owner.entity';

export class CreateCatsDto {
  @IsString()
  name: string;
  age: number;
  breed: string;
  owner: Owner;
}
