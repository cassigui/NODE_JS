import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepositories.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoriesController  = new ListCategoryController(listCategoryUseCase)

export {listCategoriesController}