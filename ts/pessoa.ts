namespace escola {
    export abstract class Pessoa {
      private _nome: string;
      private _anoNasc: number;
      private _cpf: string;
      private _endereco: string;
      private _telefone: string;
  
      public get nome(): string {
        return this._nome;
      }
  
      public set nome(nome: string) {
        this._nome = nome;
      }
  
      public get anoNasc(): number {
        return this._anoNasc;
      }
  
      public set anoNasc(anoNasc: number) {
        this._anoNasc = anoNasc;
      }
  
      public get cpf(): string {
        return this._cpf;
      }
  
      public set cpf(cpf: string) {
        this._cpf = cpf;
      }
  
      public get endereco(): string {
        return this._endereco;
      }
  
      public set endereco(endereco: string) {
        this._endereco = endereco;
      }
  
      public get telefone(): string {
        return this._telefone;
      }
  
      public set telefone(telefone: string) {
        this._telefone = telefone;
      }
  
      public calcularIdade(anoAtual: number){
        return anoAtual - this._anoNasc;
      }
    }
  }
  