import { Response } from "express";
import OpenAI from "openai";

class ServicioImagen {
  protected static async generador(modelo: string, paramsIA: string, objOpenIA: OpenAI, res: Response): Promise<any> {
    try {
      const respuesta = await objOpenIA.images.generate({
        model: modelo,
        prompt: paramsIA,
        n: 1,
        size: "1792x1024",
        quality: "hd",
      });

      const urlImagen = respuesta.data[0].url;

      res.status(200).json({ urlImagen });
    } catch (error) {
      console.error("Error al generar imagen:", error);
      res.status(400).send("Error al generar imagen");
    }
  }
}
export default ServicioImagen;
