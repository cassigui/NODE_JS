import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories"
import { CreateCategoryController } from "./CreateCategoryController"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

const categoriesRepository =  CategoriesRepositories.getInstance()

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController}