import { container } from "tsyringe"

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepositories } from "../../modules/cars/repositories/implementations/CategoriesRepositories"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository"

container.registerSingleton<ICategoriesRepository>(
        "CategoriesRepositories",
        CategoriesRepositories
)

container.registerSingleton<ISpecificationRepository>(
       "SpecificationRepository",
       SpecificationRepository
)

