class Peticion {
  private _codUsuarioPeticion: string;
  private _textoPeticion: string;
  private _modelo: string;
  private _resolucion: string;
  private _calidad: string;

  constructor(codu: string, text: string, modelo: string, resolucion: string, calidad: string) {
    this._codUsuarioPeticion = codu;
    this._textoPeticion = text;
    this._modelo = modelo;
    this._resolucion = resolucion;
    this._calidad = calidad;
  }
  // Getters
  public get codUsuarioPeticion(): string {
    return this._codUsuarioPeticion;
  }
  public get textoPeticion(): string {
    return this._textoPeticion;
  }
  public get modelo(): string {
    return this._modelo;
  }
  public get resolucion(): string {
    return this._resolucion;
  }
  public get calidad(): string {
    return this._calidad;
  }
  // Setters
  public set codUsuarioPeticion(codu: string) {
    this._codUsuarioPeticion = codu;
  }
  public set textoPeticion(text: string) {
    this._textoPeticion = text;
  }
  public set modelo(modelo: string) {
    this._modelo = modelo;
  }
  public set resolucion(resolucion: string) {
    this._resolucion = resolucion;
  }
  public set calidad(calidad: string) {
    this._calidad = calidad;
  }
}
export default Peticion;
