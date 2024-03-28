import { UserEntity } from "../entities/user.entity.js"

export class UserService {
    async createUserService (name, email, password) {
        try {
            await UserEntity.sync();
            const userAlreadyExist = await UserEntity.findOne({
                where: {
                    email
                }
            });

            if (userAlreadyExist) {
                return `the user ${name} alredy exist`;
            }

            const newUser = await UserEntity.create({
                name, email, password
            });

            return `the user ${newUser.name} has been created`;

        } catch (error) {
            return error;
        }

    }

    async getAllUserService () {
        try {
            await UserEntity.sync();
            const allUsers = await UserEntity.findAll();
            return allUsers

        } catch (error){
            return error
        }
    }

    async getUserBy(parameter, content) {
        try {
            await UserEntity.sync();
            const userAlreadyExist = await UserEntity.findOne({
                where: {
                    parameter
                }
            });

            if (!userAlreadyExist) {
                return 'User not found'
            }

            switch (parameter) {
                case'Name':
                    const userAlreadyExist = await UserEntity.findOne({
                        where: {
                            parameter
                        }
                    });
                    return userAlreadyExist;

                case 'Email':
                    if (userAlreadyExist) {
                        return userAlreadyExist

                    } else {
                        return 'user not found'
                    }

                case 'Id':
                  console.log('Mangoes and papayas are $2.79 a pound.');
                  // Expected output: "Mangoes and papayas are $2.79 a pound."
                  break;
                default:
                  return 'User not found';
              }
        } catch (error) {
            return error
        }
    }}
