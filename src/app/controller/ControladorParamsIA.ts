import { Request } from "express";
import Peticion from "../entity/Peticion";
import { ArregloIA } from "../entity/TipoParametro";

let arregloIA: ArregloIA = {};

class ControladorParamsIA {
  public static obtenerParamsIA(req: Request): string {
    const { codUsuarioPeticion, textoPeticion } = req.body as Peticion;

    const promptFinal =
      String(process.env.RESTRICTION_SYSTEM_1) +
      String(process.env.RESTRICTION_SYSTEM_2) +
      String(process.env.RESTRICTION_SYSTEM_3) +
      textoPeticion;

    if (!arregloIA[codUsuarioPeticion]) {
      arregloIA[codUsuarioPeticion] = { prompt: promptFinal };
    }

    console.log("ARREGLO IA: ", arregloIA);

    return arregloIA[codUsuarioPeticion].prompt;
  }
}

export default ControladorParamsIA;
