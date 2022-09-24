import { Module } from '@nestjs/common'
import { UsersModule } from './api/shared/users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './api/auth/auth.module'
import { PagesModule } from './api/shared/pages/pages.module'

@Module({
  imports: [
    // Module Config
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Module database Mongoose
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configSever: ConfigService) => ({
        uri: configSever.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),

    // Module Shared
    UsersModule,
    AuthModule,
    PagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
