import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Cats } from 'src/cats/entity/Cats';

@Schema()
export class Owner {
  @Prop()
  name: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cats' }])
  cats: Cats[];
}
export const OwnerSchema = SchemaFactory.createForClass(Owner);
