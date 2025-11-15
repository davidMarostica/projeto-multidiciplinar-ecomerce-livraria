import { EntidadeBase } from '../../core/models/EntidadeBase';
import { Livro } from '../../core/models/Livro'; 
import { Cliente } from './Cliente';
import { ItemVenda } from './ItemVenda';

export class Venda extends EntidadeBase {
    private itens: ItemVenda[] = [];
    private desconto: number = 0;

    constructor(
        id: number,
        private cliente: Cliente,
        private dataVenda: Date = new Date(),
        private status: 'PENDENTE' | 'CONCLUIDA' | 'CANCELADA' = 'PENDENTE'
    ) {
        super(id);
    }

    public getCliente(): Cliente { return this.cliente; }
    public getDataVenda(): Date { return this.dataVenda; }
    public getStatus(): string { return this.status; }
    public getItens(): ItemVenda[] { return [...this.itens]; }
    public getDesconto(): number { return this.desconto; }

    public adicionarItem(livro: Livro, quantidade: number): void {
        const itemExistente = this.itens.find(item => item.livro.getId() === livro.getId());
        
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            this.itens.push(new ItemVenda(livro, quantidade, livro.getPreco()));
        }
    }

    public removerItem(livroId: number): boolean {
        const index = this.itens.findIndex(item => item.livro.getId() === livroId);
        if (index !== -1) {
            this.itens.splice(index, 1);
            return true;
        }
        return false;
    }

    public getSubtotal(): number {
        return this.itens.reduce((total, item) => total + item.subtotal, 0);
    }

    public getTotal(): number {
        const subtotal = this.getSubtotal();
        return subtotal - this.desconto;
    }

    public aplicarDescontoPercentual(percentual: number): void {
        const subtotal = this.getSubtotal();
        const descontoMaximo = subtotal * 0.3;
        const descontoCalculado = subtotal * (percentual / 100);
        this.desconto = Math.min(descontoCalculado, descontoMaximo);
    }

    public finalizarVenda(): void {
        this.status = 'CONCLUIDA';
        this.dataVenda = new Date();
    }

    public cancelarVenda(): void {
        this.status = 'CANCELADA';
    }

    // MÉTODO toString() OBRIGATÓRIO - CORREÇÃO DO ERRO
    public toString(): string {
        return `Venda #${this.getId()} - Cliente: ${this.cliente.getNome()} - Total: R$ ${this.getTotal().toFixed(2)}`;
    }
}