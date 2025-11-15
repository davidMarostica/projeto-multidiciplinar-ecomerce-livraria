import { EntidadeBase } from './EntidadeBase';

export class Produto extends EntidadeBase {
    constructor(
        id: number,
        private nome: string,
        private preco: number,
        private quantidadeEstoque: number,
        private categoria: string
    ) {
        super(id);
    }

    // Getters
    public getNome(): string { return this.nome; }
    public getPreco(): number { return this.preco; }
    public getQuantidadeEstoque(): number { return this.quantidadeEstoque; }
    public getCategoria(): string { return this.categoria; }

    // Setters
    public setNome(nome: string): void { this.nome = nome; }
    public setPreco(preco: number): void { this.preco = preco; }
    public setQuantidadeEstoque(quantidade: number): void { this.quantidadeEstoque = quantidade; }
    public setCategoria(categoria: string): void { this.categoria = categoria; }

    // Métodos de negócio
    public verificarDisponibilidade(): boolean {
        return this.quantidadeEstoque > 0;
    }

    public calcularDesconto(percentual: number = 10): number {
        return this.preco * (percentual / 100);
    }

    public atualizarEstoque(quantidade: number): void {
        this.quantidadeEstoque += quantidade;
    }

    public toString(): string {
        return `Produto: ${this.nome} | R$ ${this.preco.toFixed(2)} | Estoque: ${this.quantidadeEstoque} | Categoria: ${this.categoria}`;
    }
}