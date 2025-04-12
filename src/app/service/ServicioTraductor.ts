import { Response } from "express";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";
class ServicioTraductor {
  protected static async traducirTexto(
    modelo: string,
    paramsIA: ChatCompletionMessageParam[],
    objOpenIA: OpenAI,
    res: Response
  ): Promise<any> {
    try {
      const respuesta = await objOpenIA.chat.completions.create({
        model: modelo,
        messages: paramsIA,
        max_tokens: 1000,
        response_format: { type: "text" },
      });
      const mensajeRespuesta = respuesta.choices[0].message.content;
      console.log("Mensaje de respuesta:", mensajeRespuesta);
      res.status(200).json({
        traduccion: mensajeRespuesta,
      });
    } catch (error) {
      console.error("Error en la traducción:", error);
      res.status(400).send("Error en la traducción");
    }
  }
}
export default ServicioTraductor;
