import { container } from "tsyringe"

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepositories } from "../../modules/cars/repositories/implementations/CategoriesRepositories"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository"
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

container.registerSingleton<ICategoriesRepository>(
        "CategoriesRepositories",
        CategoriesRepositories
)

container.registerSingleton<ISpecificationRepository>(
       "SpecificationRepository",
       SpecificationRepository
)

container.registerSingleton<IUserRepository> (
     "UsersRepository",
     UsersRepository
)

container.registerSingleton<IUserRep>

