import { compare } from  "bcrypt"
import { injectable, inject } from "tsyringe"
import { IUserRepository } from "../repositories/IUserRepository"
import { sign } from "jsonwebtoken"

interface IRequest {
    email : string
    password : string
}

interface IResponse {
   user : {
      name : string,
      email : string
   }
   token : string
}

@injectable()
class AuthenticateUserUseCase {
   
   constructor (
      @inject("UsersRepository")
      private userRepository : IUserRepository
   ) {}
    
   async execute({email, password} : IRequest) : Promise<IResponse> {
      const user = await this.userRepository.findByEmail (email)

      if (!user) {
         throw new Error("Email or password incorrrect")
      }

      const passwordMatch = await compare(password, user.password)
    
      if (!passwordMatch) {
         throw new Error("Email or password incorrrect")
      }

      const token = sign({}, "81dc9bdb52d04dc20036dbd8313ed055", {
         subject : user.id,
         expiresIn : "1d"
      })

      const tokenReturn : IResponse = {
         token, 
         user : {
            name : user.name,
            email : user.email
         }
      }

      return tokenReturn

   }
} 
 
export { AuthenticateUserUseCase }