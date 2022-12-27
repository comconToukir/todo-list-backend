import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  isChecked: boolean;

  @Prop({ required: true })
  isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);