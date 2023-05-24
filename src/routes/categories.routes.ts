import { Router } from 'express'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController'
import multer  from 'multer'
import { ImportCategoryController } from '../modules/cars/useCases/ImportCategory/ImportCategoryController'

const categoriesRoutes = Router()

const upload = multer({
   dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoryController = new ListCategoryController()

categoriesRoutes.post ("/", createCategoryController.handle)

categoriesRoutes.get('/', (req, res) => {
   return listCategoryController.handle(req, res)
})

categoriesRoutes.post("/import", upload.single("file"),
importCategoryController.handle)

export { categoriesRoutes }
