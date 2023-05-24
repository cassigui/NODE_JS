import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../entities/DTOS/ICreateUserDTO";
import { Repository, getRepository } from "typeorm"
import { User } from "../../entities/User"

class UsersRepository implements IUserRepository {
    private repository : Repository<User>

    constructor () {
        this.repository = getRepository(User)
    }

    async create ({
        name, 
        email, 
        driver_license,
        password
       }: ICreateUserDTO) : Promise<void> {
        const user =  this.repository.create({
            name,
            email,
            driver_license,
            password 
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
       const user = await this.repository.findOne()
       return user
    }
}

export { UsersRepository }