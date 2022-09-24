import mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ versionKey: false, timestamps: true, collection: 'sections' })
export class SectiontModel extends mongoose.Document {
  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  type: string

  //   @Prop({ required: true, default: [] })
  //   elemet: Array
}

export const SectionSchema = SchemaFactory.createForClass(SectiontModel)
