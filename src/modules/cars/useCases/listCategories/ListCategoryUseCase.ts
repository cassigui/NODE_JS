import { inject, injectable } from "tsyringe"
import { Category } from "../../entities/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

@injectable()
class ListCategoryUseCase {
    constructor (
      @inject("CategoriesRepositories")
      private categoriesRepository: ICategoriesRepository) {
    }

    async execute():Promise<Category[]> {

         const categories = await this.categoriesRepository.list()

       return categories
    }
}

export { ListCategoryUseCase }