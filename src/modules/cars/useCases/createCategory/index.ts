import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories"
import { CreateCategoryController } from "./CreateCategoryController"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

export default():CreateCategoryController  =>{

    const categoriesRepository = new CategoriesRepositories()

    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

    const createCategoryController = new CreateCategoryController(createCategoryUseCase)

    return createCategoryController

}