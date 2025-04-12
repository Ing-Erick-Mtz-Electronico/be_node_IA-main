import { body } from "express-validator";

export const datosImagen = [
  body("codUsuarioPeticion", "identificador no puede ser vacío").not().isEmpty(),
  body("textoPeticion", "texto requerido").not().isEmpty(),
  body("textoPeticion", "Mínimo 15 caracteres").isLength({ min: 15 }),
  body("textoPeticion", "Máximo 4000 caracteres").isLength({ max: 4000 }),
];
