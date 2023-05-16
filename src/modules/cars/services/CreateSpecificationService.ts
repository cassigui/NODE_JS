import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
      name: string,
      description: string
}

class CreateSpecificationService {
      
      constructor (private specificationsRepository : ISpecificationRepository) {

      }
      execute ({name, description} : IRequest): void {
         
            const specificationAlreadyExist =  this.specificationsRepository.findByName(name)
           
           if (specificationAlreadyExist) {
             throw new Error("Category already Exist")
           }

         this.specificationsRepository.create({
           name, 
           description
         })
      } 

}

export { CreateSpecificationService }