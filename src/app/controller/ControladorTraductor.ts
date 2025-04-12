import { Request, Response } from "express";
import ServicioTraductor from "../service/ServicioTraductor";
import OpenAI from "openai";
import ControladorParamsIA from "./ControladorParamsIA";

import dotenv from "dotenv";
dotenv.config({
  path: "variables.env",
});

class ControladorTraductor extends ServicioTraductor {
  public llamarTraducirTexto(req: Request, res: Response): void {
    const modeloIA = String(process.env.MODEL);
    const keyOpenAI = String(process.env.API_KEY_OPENAI);

    const objOpenAI = new OpenAI({
      apiKey: keyOpenAI,
    });

    const paramsIA = ControladorParamsIA.obtenerParamsIA(req);

    ServicioTraductor.traducirTexto(modeloIA, paramsIA, objOpenAI, res);
  }
}

const controladorTraductor = new ControladorTraductor();
export default controladorTraductor;
