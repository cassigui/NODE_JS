
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
   name : string
   description : string
}

//Definir o tipo de retorno
//Alterar o retorno de erro
//Acessar o repositorio
//Retornar algo

class CreateCategoryUseCase {
   
    constructor (private categoriesRepository: ICategoriesRepository) {
    }

    async execute( {name, description}: IRequest): Promise<void> {

        const categoryAlreadyExist = await this.categoriesRepository.findByName(name)
   
        if (categoryAlreadyExist) {
         throw new Error("Category Already Exist!") 
        }
     
        this.categoriesRepository.create({ name, description })
    }
}

export {CreateCategoryUseCase}