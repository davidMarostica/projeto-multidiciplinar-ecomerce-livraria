import { EntidadeBase } from '../../core/models/EntidadeBase';

export class Cliente extends EntidadeBase {
    constructor(
        id: number,
        private nome: string,
        private email: string,
        private telefone: string,
        private endereco: string,
        private dataCadastro: Date = new Date(),
        public ativo: boolean = true,
        public possuiPendencias: boolean = false
    ) {
        super(id);
    }

    public getNome(): string { return this.nome; }
    public getEmail(): string { return this.email; }
    public getTelefone(): string { return this.telefone; }
    public getEndereco(): string { return this.endereco; }
    public getDataCadastro(): Date { return this.dataCadastro; }

    public setNome(nome: string): void { this.nome = nome; }
    public setEmail(email: string): void { this.email = email; }
    public setTelefone(telefone: string): void { this.telefone = telefone; }
    public setEndereco(endereco: string): void { this.endereco = endereco; }

    // MÉTODO toString() OBRIGATÓRIO
    public toString(): string {
        return `Cliente: ${this.nome} | Email: ${this.email} | Telefone: ${this.telefone}`;
    }
}