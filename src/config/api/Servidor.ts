import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaApiImagen from "../../app/route/RutaImagen";
import chalk from "chalk";


class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configuracion();

    this.app.use("/api/imagen/v1", rutaApiImagen);
  }

  public configuracion(): void {
    this.app.set("PORT", process.env.PORT || 3321);
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  public iniciar(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Backend is running 🚀 in this PORT: ", this.app.get("PORT"));
      console.log("ᕦ( ᴼ ڡ ᴼ )ᕤ");
      console.log(
        chalk.green.bold("🠆 "),
        "Local: ",
        chalk.cyan.underline(`http://localhost:${chalk.cyan.bold(`${this.app.get("PORT")}`)}`)
      );
    });
  }
}

export default Servidor;
