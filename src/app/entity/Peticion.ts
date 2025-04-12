class Peticion {
  private _codUsuarioPeticion: string;
  private _idiomaPeticion: string;
  private _textoPeticion: string;

  constructor(codu: string, idio: string, text: string) {
    this._codUsuarioPeticion = codu;
    this._idiomaPeticion = idio;
    this._textoPeticion = text;
  }
  // Getters
  public get codUsuarioPeticion(): string {
    return this._codUsuarioPeticion;
  }
  public get idiomaPeticion(): string {
    return this._idiomaPeticion;
  } 
  public get textoPeticion(): string {
    return this._textoPeticion;
  }
  // Setters
  public set codUsuarioPeticion(codu: string) {
    this._codUsuarioPeticion = codu;
  }
  public set idiomaPeticion(idio: string) {
    this._idiomaPeticion = idio;
  }
  public set textoPeticion(text: string) {
    this._textoPeticion = text;
  }
}
export default Peticion;
