import express from "express"

import { categoriesRoutes } from "./routes/categories.routes"
import { specificationsRoutes } from "./routes/Specifications.routes"
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"

const app = express ()

app.use(express.json())

app.use ("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use ("/categories", categoriesRoutes)
app.use ("/specifications", specificationsRoutes)

app.listen (3333, ()=> { console.log ("Ola") })