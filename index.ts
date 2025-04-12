import dotenv from "dotenv";
dotenv.config();

import Servidor from "./src/config/api/Servidor";

const servidor = new Servidor();
servidor.iniciar();