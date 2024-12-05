import { Router } from "express"
import { body } from "express-validator"
import { createProduct } from "./handlers/product"
import { handleImputErrors } from "./middleware"

const router = Router()

//routing
router.get("/",(req,res) => {
    res.json("Desde Get")
})

router.post("/",
    /*
    //validacion
    body("name").notEmpty()
    .withMessage("EL nombre del producto no puede ser vacio"),


    body("price").isNumeric().withMessage("Valor no valido").notEmpty()
    .withMessage("El precio no puede ir vacio")
    .custom(value => value > 0).withMessage("El precio no puede ser 0"),
    */
   // handleImputErrors,
    
    createProduct
)

router.put("/",(req,res) => {
    res.json("Desde Put")
})

router.patch("/",(req,res) => {
    res.json("Desde Patch")
})

router.delete("/",(req,res) => {
    res.json("Desde delete")
})

export default router