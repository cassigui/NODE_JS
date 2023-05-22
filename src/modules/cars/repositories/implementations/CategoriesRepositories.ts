
import { Category } from "../../entities/category"

import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"

import { Repository, getRepository } from "typeorm"

class CategoriesRepositories implements ICategoriesRepository{
   
     private repository: Repository<Category>

    //private static INSTANCE : CategoriesRepositories
    
   constructor () {
        this.repository = getRepository(Category)
    }

   async create( { description, name }: ICreateCategoryDTO): Promise<void> {
     const category = this.repository.create ({
        description,
        name,
     }) 
    
    await this.repository.save(category)

   }

   async list(): Promise<Category[]>{
    const categories =  await this.repository.find()
    return categories   
}

   async findByName( name : string ): Promise<Category> {
    // Select * from categories where name = "name" 
    // findOne => MAKE a select by 1.
       const category = await this.repository.findOne({ name })
       return category
   }

   //find => função do proprio jS

}

export { CategoriesRepositories, ICreateCategoryDTO  }
