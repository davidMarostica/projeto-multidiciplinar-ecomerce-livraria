import { Livro } from '../../core/models/Livro';

export class ItemVenda {
    constructor(
        public livro: Livro,
        public quantidade: number,
        public precoUnitario: number
    ) {}

    public get subtotal(): number {
        return this.quantidade * this.precoUnitario;
    }
}