import { Router } from 'express'
import { CreateCategorySevice } from "../modules/cars/services/CreateCategoryService"

import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepositories"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepositories()

categoriesRoutes.post ("/", (request, response) => {
    const { name, description } = request.body
  
    const createCategoryService = new CreateCategorySevice(categoriesRepository)
    
    createCategoryService.execute({name, description})

   return response.status(202).send()

})

categoriesRoutes.get('/', (request, response) => {
   const all = categoriesRepository.list()

   return response.json(all)
})

export { categoriesRoutes }