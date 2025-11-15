import { EntidadeBase } from '../../core/models/EntidadeBase';

export class Fornecedor extends EntidadeBase {
    constructor(
        id: number,
        private nome: string,
        private contato: string,
        private telefone: string,
        private email: string,
        private especialidade: string
    ) {
        super(id);
    }

    public getNome(): string { return this.nome; }
    public getContato(): string { return this.contato; }
    public getTelefone(): string { return this.telefone; }
    public getEmail(): string { return this.email; }
    public getEspecialidade(): string { return this.especialidade; }

    public setNome(nome: string): void { this.nome = nome; }
    public setContato(contato: string): void { this.contato = contato; }
    public setTelefone(telefone: string): void { this.telefone = telefone; }
    public setEmail(email: string): void { this.email = email; }
    public setEspecialidade(especialidade: string): void { this.especialidade = especialidade; }

    // MÉTODO toString() OBRIGATÓRIO
    public toString(): string {
        return `Fornecedor: ${this.nome} | Contato: ${this.contato} | Especialidade: ${this.especialidade}`;
    }
}