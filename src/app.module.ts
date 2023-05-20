import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entitys/user.entity';


@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      port: parseInt(process.env.DB_PORT),
      entities: [UserEntity],
      
    }),
    UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
