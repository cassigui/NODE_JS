import { Category} from "../models/category"

interface ICreateCategoryDTO {
    name:string,
    description:string
}

interface ICategoriesRepository {
    findByName (name: string): Category
    list ()
    create({name, description}: ICreateCategoryDTO): void
}

export {ICategoriesRepository}