import  express  from "express";
import colors from "colors";
import cors, {CorsOptions} from "cors"
import morgan from "morgan"
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

//permitir conexiones 
const corsOptions : CorsOptions = {
    origin: function(origin, callback){
        if(origin === process.env.FRONTEND_URL){
            callback(null,true)
        }else{
            callback(new Error("Error de CORS"))
        }
    }
}

server.use(cors(corsOptions))

//leer datos de formularios 
server.use(express.json())

server.use(morgan("combined"))

server.use("/api/products", router)

server.get("/api", (req,res) => {
    res.json({msg: "Desde API"})
})

//Docs 
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpect))

export default server

