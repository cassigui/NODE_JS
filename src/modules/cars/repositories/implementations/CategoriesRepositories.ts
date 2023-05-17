import { Category } from "../../models/category"
import { ICategoriesRepository } from "../ICategoriesRepository"

//DTO => data transfer object
interface ICreateCategoryDTO {
    name: string,
    description: string,
}

class CategoriesRepositories implements ICategoriesRepository{
    private categories: Category[] = []

    private static INSTANCE : CategoriesRepositories
    
    private constructor () {
        this.categories = []
    }
    
    public static getInstance() : CategoriesRepositories {
        
         if (!CategoriesRepositories.INSTANCE) {
            CategoriesRepositories.INSTANCE = new CategoriesRepositories()
         }

         return CategoriesRepositories.INSTANCE

    }

   create( { description, name }: ICreateCategoryDTO): void {
    const category = new Category()
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })

    this.categories.push (category)
   }

   list(): Category[] {
      return this.categories
   }

   findByName( name : string ): Category {
       const category = this.categories.find(category => category.name === name)
       return category
   }

   //find => função do proprio jS

}

export { CategoriesRepositories, ICreateCategoryDTO  }
