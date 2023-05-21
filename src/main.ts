import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserEntity } from './user/entitys/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  AppDataSource.initialize().then(async () => {

    const userService = app.get(UserService)
    const userController = UserController;

    console.log("Inserting a new user into the database...")
    const user = new UserEntity()
    user.name = "Gabriel Neves 23"
    user.email = 'gabrie2l@emadil.com'
    user.password = '1234562323',
    user.cpf = '12345678910'
    await userService.createUser(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(UserEntity)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
  
}
bootstrap();
