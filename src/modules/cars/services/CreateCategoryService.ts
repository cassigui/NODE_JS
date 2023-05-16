
import { ICategoriesRepository } from "../repositories/ICategoriesRepository"

interface IRequest {
   name : string
   description : string
}

//Definir o tipo de retorno
//Alterar o retorno de erro
//Acessar o repositorio
//Retornar algo

class CreateCategorySevice {
   
    constructor (private categoriesRepository: ICategoriesRepository) {

    }

    execute( {name, description}: IRequest): void {

        const categoryAlreadyExist = this.categoriesRepository.findByName(name)
   
        if (categoryAlreadyExist) {
         throw new Error("Category Already Exist!") 
        }
     
        this.categoriesRepository.create({ name, description })
    }
}

export {CreateCategorySevice}