import  express  from "express";
import colors from "colors";
import swaggerUi from "swagger-ui-express"
import swaggerSpect from "./config/swagger";
import router from "./router";
import db from "./config/db";

//Conectar a la base de datos

export async function ConnectionDB() {
    try{
        await db.authenticate()
        db.sync()
        //console.log(colors.bgMagenta("Conexion exitosa a la Base de Datos"))
    }catch(error){
        //console.log(error)
        console.log(colors.bgRed.white("Hubo un error al conectar a la Base de Datos"))
    }
}

ConnectionDB()



//instancia de express
const server = express()

//leer datos de formularios 
server.use(express.json())


server.use("/api/products", router)

server.get("/api", (req,res) => {
    res.json({msg: "Desde API"})
})

//Docs 
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpect))

export default server

