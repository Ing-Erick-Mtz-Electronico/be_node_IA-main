class Peticion {
  private _codUsuarioPeticion: string;
  private _textoPeticion: string;

  constructor(codu: string, text: string) {
    this._codUsuarioPeticion = codu;
    this._textoPeticion = text;
  }
  // Getters
  public get codUsuarioPeticion(): string {
    return this._codUsuarioPeticion;
  }
  public get textoPeticion(): string {
    return this._textoPeticion;
  }
  // Setters
  public set codUsuarioPeticion(codu: string) {
    this._codUsuarioPeticion = codu;
  }
  public set textoPeticion(text: string) {
    this._textoPeticion = text;
  }
}
export default Peticion;
