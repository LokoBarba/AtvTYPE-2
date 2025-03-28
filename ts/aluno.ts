namespace escola {
    export class Aluno extends Pessoa {
      private _matricula: number;
      private _curso: string;
      private _escola: string;
      private _notas: number[] = [];

      constructor(matricula: number) {
        super();
        this._matricula = matricula;
      }
  
      public get matricula(): number {
        return this._matricula;
      }
  
      public set matricula(matricula: number) {
        this._matricula = matricula;
      }
  
      public get curso(): string {
        return this._curso;
      }
  
      public set curso(curso: string) {
        this._curso = curso;
      }
  
      public get escola(): string {
        return this._escola;
      }
  
      public set escola(escola: string) {
        this._escola = escola;
      }
  
      //adicionar nota
      public adicionarNota(nota: number){
        this._notas.push(nota);
      }
  
      //calcular a média
      public calcularMedia(){
        if (this._notas.length === 0) return 0;
        return this._notas.reduce((acc, nota) => acc + nota, 0) / this._notas.length;
      }
    }
  }
  