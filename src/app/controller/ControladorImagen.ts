import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import ServicioImagen from "../service/ServicioImagen";
import OpenAI from "openai";
import ControladorParamsIA from "./ControladorParamsIA";
import Peticion from "../entity/Peticion";
import ModeloEnum from "../enums/ModeloEnum";


class ControladorImagen extends ServicioImagen {
  public llamarGenerador(req: Request, res: Response): void {
    const { modelo, resolucion, calidad } = req.body as Peticion;
    const modeloIA = ModeloEnum[modelo as keyof typeof ModeloEnum];
    const keyOpenAI = String(process.env.API_KEY_OPENAI);

    const objOpenAI = new OpenAI({
      apiKey: keyOpenAI,
    });

    const paramsIA = ControladorParamsIA.obtenerParamsIA(req);

    ServicioImagen.generador(modeloIA, resolucion, calidad, paramsIA, objOpenAI, res);
  }
}

const controladorImagen = new ControladorImagen();
export default controladorImagen;
