import { Module } from '@nestjs/common'
import { PagesService } from './pages.service'
import { PagesController } from './pages.controller'
import { MongooseModule } from '@nestjs/mongoose'

import { PageModel, PageSchema } from './models/pages.model'
import { SectionSchema, SectiontModel } from './models/sections.model'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PageModel.name, schema: PageSchema }]),
    MongooseModule.forFeature([{ name: SectiontModel.name, schema: SectionSchema }]),
  ],

  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
