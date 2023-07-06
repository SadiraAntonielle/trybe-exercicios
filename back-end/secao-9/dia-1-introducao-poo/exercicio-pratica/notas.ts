class School {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[] = Array();
  private _notasTrabalho: number[] = Array();

  constructor(
  matricula: string,
  nome: string,
  notasProvas: number[],
  notasTrabalho: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this.notasProvas = notasProvas;
    this.notasTrabalho = notasTrabalho;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(value: number[]) {
    if (value.length !== 4) {
      throw new Error ('Cada aluno so pode ter 4 notas de prova')
    }
    this._notasProvas = value;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error ('Cada aluno so pode ter 2 notas de trabalho')
    }
    this._notasTrabalho = value;
  }
}

const pessoa1 = new School('120', 'Rebeca', [1, 2, 3, 4], [1, 2]);
console.log(pessoa1);
