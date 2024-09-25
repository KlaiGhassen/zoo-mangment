import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Owner } from 'src/owner/entities/owner.entity';
@Schema()
export class Cats {
  @Prop({ required: true })
  name: string;
  @Prop()
  age: number;
  @Prop()
  breed: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Owner.name })
  owner: Owner;
}
export const CatSchema = SchemaFactory.createForClass(Cats);
