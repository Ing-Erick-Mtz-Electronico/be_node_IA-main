import Servidor from "./src/config/api/Servidor";
import dotenv from "dotenv";
dotenv.config();

const servidor = new Servidor();
servidor.iniciar();