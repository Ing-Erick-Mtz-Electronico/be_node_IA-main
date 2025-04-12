import { Response } from "express";
import OpenAI from "openai";

let arreloIA: Record<string, string> = {};
class ServicioTraductor {
  protected static async conversarAerolina(
    codeUsuarioPeticion: string,
    textoPeticion: string,
    claveAsistente: string,
    objOpenAI: OpenAI,
    res: Response
  ): Promise<any> {
    try {
      if (!arreloIA[codeUsuarioPeticion]) {
        const hilo = await objOpenAI.beta.threads.create();
        arreloIA[codeUsuarioPeticion] = hilo.id;
      }
      const hiloId = arreloIA[codeUsuarioPeticion];

      await objOpenAI.beta.threads.messages.create(hiloId, {
        role: "user",
        content: textoPeticion,
      });

      const asistente = await objOpenAI.beta.threads.runs.create(hiloId, {
        assistant_id: claveAsistente,
      });

      console.log("asistente: ", asistente.id, "asistente estado: ", asistente.status);

      let intentos = 0;

      const LIMITE_INTENTOS = 30;

      let asistanteTemporal = asistente;

      while (asistanteTemporal.status !== "completed" && intentos <= LIMITE_INTENTOS) {
        await new Promise((resolve, _reject) => {
          setTimeout(resolve, 1000);
        });
        intentos++;
        asistanteTemporal = await objOpenAI.beta.threads.runs.retrieve(hiloId, asistente.id);
        console.log("Intento número: ", intentos);
        console.log("ESTADO -->>", asistanteTemporal.status);
      }

      const mensajes = await objOpenAI.beta.threads.messages.list(hiloId);
      console.log("MENSAJES: ", mensajes);

      const mensajesAsistente = mensajes.data.filter((msg) => msg.role === "assistant");
      let respuesta = "";

      console.log("MENSAJE ASISTENTE: ", mensajesAsistente);

      const ultimoMensaje = mensajesAsistente.sort((a, b) => b.created_at - a.created_at)[0];

      console.log("Ultimo mensaje: ", ultimoMensaje);

      if (ultimoMensaje.content[0].type === "text") {
        respuesta = ultimoMensaje.content[0].text.value;
        res.status(200).json({ respuesta });
      }
    } catch (error) {
      console.log("Ha ocurrido un error: ", error);
      res.status(400).json({ error });
    }
  }
}
export default ServicioTraductor;
