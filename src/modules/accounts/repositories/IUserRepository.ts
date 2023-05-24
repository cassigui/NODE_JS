import { ICreateUserDTO } from "../entities/DTOS/ICreateUserDTO"
import { User } from "../entities/User"

interface IUserRepository {
  create(data : ICreateUserDTO) : Promise<void>
  findByEmail(email:string): Promise<User> 
}

export { IUserRepository }