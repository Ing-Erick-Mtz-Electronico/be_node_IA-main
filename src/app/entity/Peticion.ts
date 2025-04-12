class Peticion {
  private _codUsuarioPeticion: string;
  private _modeloPeticion: string;
  private _idiomaPeticion: string;
  private _textoPeticion: string;

  constructor(codu: string, idio: string, text: string, modelo: string) {
    this._codUsuarioPeticion = codu;
    this._modeloPeticion = modelo;
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
  public get modeloPeticion(): string {
    return this._modeloPeticion;
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
  public set modeloPeticion(modelo: string) {
    this._modeloPeticion = modelo;
  }
}
export default Peticion;
