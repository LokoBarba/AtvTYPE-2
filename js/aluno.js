"use strict";
var escola;
(function (escola_1) {
    class Aluno extends escola_1.Pessoa {
        constructor(matricula) {
            super();
            this._notas = [];
            this._matricula = matricula;
        }
        get matricula() {
            return this._matricula;
        }
        set matricula(matricula) {
            this._matricula = matricula;
        }
        get curso() {
            return this._curso;
        }
        set curso(curso) {
            this._curso = curso;
        }
        get escola() {
            return this._escola;
        }
        set escola(escola) {
            this._escola = escola;
        }
        //adicionar nota
        adicionarNota(nota) {
            this._notas.push(nota);
        }
        //calcular a média
        calcularMedia() {
            if (this._notas.length === 0)
                return 0;
            return this._notas.reduce((acc, nota) => acc + nota, 0) / this._notas.length;
        }
    }
    escola_1.Aluno = Aluno;
})(escola || (escola = {}));
