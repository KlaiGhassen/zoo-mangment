import { PartialType } from '@nestjs/mapped-types';
import { CreateCatsDto } from './create-cats-dtao';

export class UopdateCatsDto extends PartialType(CreateCatsDto) {
  id: string;
}
