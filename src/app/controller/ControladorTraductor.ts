import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

import ServicioTraductor from "../service/ServicioTraductor";
import Peticion from "../entity/Peticion";
dotenv.config({
  path: "variables.env",
});

class ControladorTraductor extends ServicioTraductor {
  public llamarTraducirTexto(req: Request, res: Response): void {
    const { codUsuarioPeticion, textoPeticion } = req.body as Peticion;
    const keyOpenAI = String(process.env.API_KEY_OPENAI);
    const keyAssistent = String(process.env.ASSISTENT_KEY);

    const objOpenAI = new OpenAI({
      apiKey: keyOpenAI,
    });

    ServicioTraductor.conversarAerolina(codUsuarioPeticion, textoPeticion, keyAssistent, objOpenAI, res);
  }
}

const controladorTraductor = new ControladorTraductor();
export default controladorTraductor;
