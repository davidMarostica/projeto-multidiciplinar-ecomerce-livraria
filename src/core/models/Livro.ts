import { Produto } from './Produto';

export class Livro extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        quantidadeEstoque: number,
        categoria: string,
        private autor: string,
        private editora: string,
        private numeroPaginas: number,
        private isbn: string
    ) {
        super(id, nome, preco, quantidadeEstoque, categoria);
    }

    public getAutor(): string { return this.autor; }
    public getEditora(): string { return this.editora; }
    public getNumeroPaginas(): number { return this.numeroPaginas; }
    public getIsbn(): string { return this.isbn; }

    public setAutor(autor: string): void { this.autor = autor; }
    public setEditora(editora: string): void { this.editora = editora; }
    public setNumeroPaginas(paginas: number): void { this.numeroPaginas = paginas; }
    public setIsbn(isbn: string): void { this.isbn = isbn; }

    public calcularDesconto(): number {
        const descontoBase = this.getNumeroPaginas() > 300 ? 15 : 10;
        return super.calcularDesconto(descontoBase);
    }

    public exibirDetalhes(): string {
        return `Livro: ${this.getNome()}
Autor: ${this.autor}
Editora: ${this.editora}
Categoria: ${this.getCategoria()}
Paginas: ${this.numeroPaginas}
ISBN: ${this.isbn}
Preco: R$ ${this.getPreco().toFixed(2)}
Estoque: ${this.getQuantidadeEstoque()}
ID: ${this.getId()}`;
    }

    public toString(): string {
        return `Livro: ${this.getNome()} por ${this.autor} | R$ ${this.getPreco().toFixed(2)} | ${this.getCategoria()}`;
    }
}