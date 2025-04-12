import { Router } from "express";
import controladorImagen from "../controller/ControladorImagen";
import { datosImagen } from "../../config/domain/informacion";
import validarInfo from "../../middleware/ValidarInfo";

class RutaImagen {
  public rutaApiImagen: Router;

  constructor() {
    this.rutaApiImagen = Router();
    this.rutaApiImagen.post("/generar", datosImagen, validarInfo.peticion, controladorImagen.llamarGenerador);
  }
}

const rutaImagen = new RutaImagen();
export default rutaImagen.rutaApiImagen;
