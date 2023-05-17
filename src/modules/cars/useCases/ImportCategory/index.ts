
import { CategoriesRepositories } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositoriy = CategoriesRepositories.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositoriy)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }