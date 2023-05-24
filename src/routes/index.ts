import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './Specifications.routes'
import { usersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticator.routes"

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/users", usersRoutes)
router.use("/specifications", specificationsRoutes)
router.use (authenticateRoutes)

export { router }