import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserEntity } from './user/entitys/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  
}
bootstrap();
