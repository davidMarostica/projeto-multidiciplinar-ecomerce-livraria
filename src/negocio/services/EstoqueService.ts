import { Livro } from '../../core/models/Livro';
import { ItemVenda } from '../models/ItemVenda';

export class EstoqueService {
    
    public atualizarEstoqueVenda(itens: ItemVenda[]): Map<number, number> {
        const alteracoes = new Map<number, number>();
        
        itens.forEach(item => {
            const livro = item.livro;
            const quantidadeAnterior = livro.getQuantidadeEstoque();
            const quantidadeAtual = quantidadeAnterior - item.quantidade;
            
            livro.setQuantidadeEstoque(quantidadeAtual);
            alteracoes.set(livro.getId(), quantidadeAtual);
        });
        
        return alteracoes;
    }

    public restaurarEstoqueVenda(itens: ItemVenda[]): void {
        itens.forEach(item => {
            const livro = item.livro;
            const quantidadeAtual = livro.getQuantidadeEstoque();
            livro.setQuantidadeEstoque(quantidadeAtual + item.quantidade);
        });
    }
}