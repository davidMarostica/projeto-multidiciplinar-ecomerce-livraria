import { BaseRepository } from './BaseRepository';
import { Produto } from '../models/Produto';

export class ProdutoRepository<T extends Produto> extends BaseRepository<T> {
    
    public buscarPorNome(nome: string): T[] {
        const produtos = this.listarTodos();
        return produtos.filter(produto => 
            produto.getNome().toLowerCase().includes(nome.toLowerCase())
        );
    }

    public buscarPorCategoria(categoria: string): T[] {
        const produtos = this.listarTodos();
        return produtos.filter(produto => 
            produto.getCategoria().toLowerCase().includes(categoria.toLowerCase())
        );
    }

    public buscarPorFaixaPreco(min: number, max: number): T[] {
        const produtos = this.listarTodos();
        return produtos.filter(produto => 
            produto.getPreco() >= min && produto.getPreco() <= max
        );
    }

    public getProdutosComEstoque(): T[] {
        const produtos = this.listarTodos();
        return produtos.filter(produto => produto.verificarDisponibilidade());
    }

    public getCategorias(): Set<string> {
        const produtos = this.listarTodos();
        const categorias = new Set<string>();
        produtos.forEach(produto => categorias.add(produto.getCategoria()));
        return categorias;
    }
}