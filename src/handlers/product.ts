import { Request, Response } from "express"
import Product from "../models/Product.model"
import { CreatedAt } from "sequelize-typescript"

export const getProducts = async (req: Request,res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ["price","DESC"]
            ],
            attributes: {exclude: ["createdAt","updatedAt","availability"]}
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

export const getProductsById = async (req: Request,res: Response) => {
    try {
        const {id} = req.params
        const product = await Product.findByPk(id)
        
        /*
        if(!product){
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }
        */

        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}


export const createProduct = async (req: Request, res: Response) => {

    try{
        const product = await Product.create(req.body)
        res.json({data: product})
    }catch(error){
        console.log(error);
    }
}

export const updateProduct = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)
         /*
    if(!product){
        return res.status(404).json({
            error: "Producto no encontrado"
        })
    }
        */


    //actualizar 

    await product.update(req.body)
    await product.save()

    res.json({data: product}) 
}

export const updateAvailability = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)
         /*
    if(!product){
        return res.status(404).json({
            error: "Producto no encontrado"
        })
    }
        */


    //actualizar 

    product.availability = !product.dataValues.availability
    await product.save()

    res.json({data: product}) 
}

export const deletProduct = async (req: Request,res: Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)
         /*
    if(!product){
        return res.status(404).json({
            error: "Producto no encontrado"
        })
    }
        */
    
    await product.destroy()
    res.json({data: "Producto eliminado"})
}