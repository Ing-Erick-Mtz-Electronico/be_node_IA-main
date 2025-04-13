import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import ServicioImagen from "../service/ServicioImagen";
import OpenAI from "openai";
import ControladorParamsIA from "./ControladorParamsIA";

class ControladorImagen extends ServicioImagen {
  public llamarGenerador(req: Request, res: Response): void {
    const modeloIA = String(process.env.MODEL_DALL_E_2);
    const keyOpenAI = String(process.env.API_KEY_OPENAI);

    const objOpenAI = new OpenAI({
      apiKey: keyOpenAI,
    });

    const paramsIA = ControladorParamsIA.obtenerParamsIA(req);

    ServicioImagen.generador(modeloIA, paramsIA, objOpenAI, res);
  }
}

const controladorImagen = new ControladorImagen();
export default controladorImagen;
