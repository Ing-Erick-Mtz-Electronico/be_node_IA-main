import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class ValidarInfo {
  public peticion(req: Request, res: Response, next: NextFunction): void {
    const arregloErrores = validationResult(req);

    if (arregloErrores.isEmpty()) {
      next();
    } else {
      res.status(400).json({ respuesta: arregloErrores.array() });
    }
  }
}

const validarInfo = new ValidarInfo();
export default validarInfo;
