// import { AppDataSource } from "./data-source"
// import { UserEntity } from "./user/entitys/user.entity"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new UserEntity()
//     user.name = "Gabriel Neves 2"
//     user.email = 'gabrie2l@email.com'
//     user.password = '123456'
//     user.cpf = '12345678910'
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(UserEntity)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
