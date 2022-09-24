import mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ versionKey: false, timestamps: true, collection: 'users' })
export class User extends mongoose.Document {
  @Prop({ required: true })
  firstName: string

  @Prop({ required: true })
  lastName: string

  @Prop()
  username: string

  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true, unique: true })
  phoneNumber: string

  @Prop({ required: true })
  hash: string

  @Prop({ default: null })
  hashRt: string
}

export const UserSchema = SchemaFactory.createForClass(User)
