import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, deletProduct, getProducts, getProductsById, updateAvailability, updateProduct } from "./handlers/product"
import { handleImputErrors } from "./middleware"

const router = Router()

//routing
router.get("/", getProducts)
router.get("/:id", 
    param("id").isInt().withMessage("ID no valido"), 
    //handleImputErrors
    getProductsById
)

router.post("/",
    
    //validacion
    body("name").notEmpty()
    .withMessage("EL nombre del producto no puede ser vacio"),


    body("price").isNumeric().withMessage("Valor no valido").notEmpty()
    .withMessage("El precio no puede ir vacio")
    .custom(value => value > 0).withMessage("El precio no puede ser 0"),
    
    //handleImputErrors,
    
    createProduct
)

router.put("/:id", 
    /*
    //validacion
    body("name").notEmpty()
    .withMessage("EL nombre del producto no puede ser vacio"),


    body("price").isNumeric().withMessage("Valor no valido").notEmpty()
    .withMessage("El precio no puede ir vacio")
    .custom(value => value > 0).withMessage("El precio no puede ser 0"),
    body("availability").isBoolean()
    .withMessage("Valor para disponibilidad no valido"),
    */
    //handleImputErrors,
    
    updateProduct)

router.patch("/:id", 
    param("id").isInt().withMessage("ID no valido"), 
    //handleImputErrors,
    updateAvailability)

router.delete("/:id",
    param("id").isInt().withMessage("ID no valido"), 
    //handleImputErrors,
    deletProduct
)

export default router