import { Router } from "express";
import controladorTraductor from "../controller/ControladorTraductor";

class RutaTraductor {
  public rutaApiTraductor: Router;

  constructor() {
    this.rutaApiTraductor = Router();
    this.rutaApiTraductor.post("/traducir", controladorTraductor.llamarTraducirTexto);
    
  }
}

const rutaTraductor = new RutaTraductor();
export default rutaTraductor.rutaApiTraductor;
