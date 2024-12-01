import  express  from "express";
import router from "./router";
import db from "./config/db";

//Conectar a la base de datos

async function ConnectionDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log("Conexion exitosa a la Base de Datos")
    }catch(error){
        console.log(error)
        console.log("Hubo un error al conectar a la Base de Datos")
    }
}

ConnectionDB()

const server = express()

server.use("/api/products", router)

export default server

