import { Router } from "express"
import { body } from "express-validator"
import { createProduct } from "./handlers/product"

const router = Router()

//routing
router.get("/",(req,res) => {
    res.json("Desde Get")
})

router.post("/",createProduct)

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