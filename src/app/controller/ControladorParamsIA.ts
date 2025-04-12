import { Request } from "express";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import Peticion from "../entity/Peticion";

let arregloIA: Record<string, ChatCompletionMessageParam[]> = {};

class ControladorParamsIA {
  public static obtenerParamsIA(req: Request): ChatCompletionMessageParam[] {
    const { codUsuarioPeticion, idiomaPeticion, textoPeticion } = req.body as Peticion;

    const peticionUSuario = String(process.env.USER_REQUEST) + idiomaPeticion + ": " + textoPeticion;

    if (!arregloIA[codUsuarioPeticion]) {
      arregloIA[codUsuarioPeticion] = [
        {
          role: "system",
          content: String(process.env.RESTRICTION_SYSTEM_1),
        },
        {
          role: "system",
          content: String(process.env.RESTRICTION_SYSTEM_2),
        },
        {
          role: "system",
          content: String(process.env.RESTRICTION_SYSTEM_3),
        },
      ];
    }
    arregloIA[codUsuarioPeticion].push({
      role: "user",
      content: peticionUSuario,
    });

    return arregloIA[codUsuarioPeticion];
  }
}

export default ControladorParamsIA;
