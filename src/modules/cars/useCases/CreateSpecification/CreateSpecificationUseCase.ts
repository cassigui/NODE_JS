import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe"

interface IRequest {
      name: string,
      description: string
}

@injectable()
class CreateSpecificationUseCase {
      
      constructor (
        @inject("SpecificationRepository")
        private specificationsRepository : ISpecificationRepository
        ) {}
        
      async execute ({name, description} : IRequest): Promise<void> {
         
            const specificationAlreadyExist = await this.specificationsRepository.findByName(name)
           
           if (specificationAlreadyExist) {
             throw new Error("Category already Exist")
           }

         await this.specificationsRepository.create({
           name, 
           description
         })
      } 

}

export { CreateSpecificationUseCase }