import { Request, Response } from "express";
import ServicioTraductor from "../service/ServicioTraductor";
import OpenAI from "openai";
import ControladorParamsIA from "./ControladorParamsIA";
import Peticion from "../entity/Peticion";
import modelEnum from "../enum/ModelEnum";
import keyEnum from "../enum/KeyEnum";
import dotenv from "dotenv";
import baseUrl from "../enum/BaseUrlEnum";
dotenv.config();

class ControladorTraductor extends ServicioTraductor {
  public llamarTraducirTexto(req: Request, res: Response): void {
    const { modeloPeticion } = req.body as Peticion;
    
    const keyOpenAI = keyEnum[modeloPeticion as keyof typeof keyEnum];
    const modeloIA = modelEnum[modeloPeticion as keyof typeof modelEnum];
    const baseURL = baseUrl[modeloPeticion as keyof typeof baseUrl];
    
    const objOpenAI = new OpenAI({
      apiKey: keyOpenAI,
      baseURL: baseURL
    });

    const paramsIA = ControladorParamsIA.obtenerParamsIA(req);

    ServicioTraductor.traducirTexto(modeloIA, paramsIA, objOpenAI, res);
  }
}

const controladorTraductor = new ControladorTraductor();
export default controladorTraductor;
