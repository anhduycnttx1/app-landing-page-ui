import mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { SectiontModel } from './sections.model'

@Schema({ versionKey: false, timestamps: true, collection: 'pages' })
export class PageModel extends mongoose.Document {
  @Prop({ required: true })
  title: string

  @Prop({ required: true, unique: true, lowercase: true })
  slug: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sections', default: [] })
  sections: SectiontModel
}

export const PageSchema = SchemaFactory.createForClass(PageModel)
