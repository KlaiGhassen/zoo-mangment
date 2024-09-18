import { PartialType } from '@nestjs/mapped-types';
import { CreateChienDto } from './create-chien.dto';

export class UpdateChienDto extends PartialType(CreateChienDto) {}
