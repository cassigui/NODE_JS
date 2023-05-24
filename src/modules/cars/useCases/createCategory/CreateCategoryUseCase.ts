import { inject, injectable } from  "tsyringe"
import { hash } from "bcrypt"

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
   name : string
   description : string
}

@injectable() 
class CreateCategoryUseCase {  
    
    constructor (
        @inject("CategoriesRepositories")
        private categoriesRepository: ICategoriesRepository)
         {}

    async execute( {name, description}: IRequest): Promise<void> {

        const categoryAlreadyExist = await this.categoriesRepository.findByName(name)
   
        if (categoryAlreadyExist) {
         throw new Error("Category Already Exist!") 
        }
     
        this.categoriesRepository.create({ name, description })
    }
}

export {CreateCategoryUseCase}