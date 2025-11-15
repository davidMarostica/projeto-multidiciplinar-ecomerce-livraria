import { Livro } from '../models/Livro';
import { ProdutoRepository } from '../repositories/ProdutoRepository';
import { CategoriaService } from '../services/CategoriaService';

export class ProdutoController {
    private repository: ProdutoRepository<Livro>;
    private categoriaService: CategoriaService;

    constructor() {
        this.repository = new ProdutoRepository<Livro>();
        this.categoriaService = new CategoriaService();
        this.inicializarDados();
    }

    private inicializarDados(): void {
        const livrosIniciais = [
            new Livro(0, "Dom Casmurro", 29.90, 10, "romance", "Machado de Assis", "Companhia das Letras", 256, "978-8535930000"),
            new Livro(0, "1984", 120.50, 5, "ficcao", "George Orwell", "Editora B", 328, "978-8535930001"),
            new Livro(0, "O Pequeno Principe", 35.00, 15, "infantil", "Antoine de Saint-Exupery", "Editora C", 96, "978-8535930002")
        ];

        livrosIniciais.forEach(livro => {
            this.cadastrar(livro);
        });
    }

    public cadastrar(livro: Livro): Livro {
        const categoriaNormalizada = this.categoriaService.categorizarProduto(livro.getCategoria());
        livro.setCategoria(categoriaNormalizada);
        
        const livroCriado = this.repository.criar(livro);
        this.categoriaService.adicionarCategoria(categoriaNormalizada);
        
        return livroCriado;
    }

    public listarTodos(): Map<number, Livro> {
        const livrosArray = this.repository.listarTodos();
        const livrosMap = new Map<number, Livro>();
        
        livrosArray.forEach(livro => {
            livrosMap.set(livro.getId(), livro);
        });
        
        return livrosMap;
    }

    public buscarPorId(id: number): Livro | null {
        return this.repository.buscarPorId(id);
    }

    public buscarPorNome(nome: string): Livro[] {
        return this.repository.buscarPorNome(nome);
    }

    public buscarPorCategoria(categoria: string): Livro[] {
        return this.repository.buscarPorCategoria(categoria);
    }

    public buscarPorAutor(autor: string): Livro[] {
        const livros = this.repository.listarTodos();
        return livros.filter(livro => 
            livro.getAutor().toLowerCase().includes(autor.toLowerCase())
        );
    }

    public atualizar(id: number, livroAtualizado: Livro): boolean {
        const categoriaNormalizada = this.categoriaService.categorizarProduto(livroAtualizado.getCategoria());
        livroAtualizado.setCategoria(categoriaNormalizada);
        
        const sucesso = this.repository.atualizar(id, livroAtualizado);
        if (sucesso) {
            this.categoriaService.adicionarCategoria(categoriaNormalizada);
        }
        return sucesso;
    }

    public deletar(id: number): boolean {
        return this.repository.deletar(id);
    }

    public getCategorias(): string[] {
        return this.categoriaService.listarCategorias();
    }

    public getEstatisticas(): Map<string, number> {
        const estatisticas = new Map<string, number>();
        const livros = this.repository.listarTodos();

        estatisticas.set("total_livros", livros.length);
        
        const totalEstoque = livros.reduce((total, livro) => total + livro.getQuantidadeEstoque(), 0);
        estatisticas.set("total_estoque", totalEstoque);
        
        const valorTotalEstoque = livros.reduce((total, livro) => 
            total + (livro.getPreco() * livro.getQuantidadeEstoque()), 0
        );
        estatisticas.set("valor_total_estoque", parseFloat(valorTotalEstoque.toFixed(2)));

        const livrosDisponiveis = livros.filter(livro => livro.verificarDisponibilidade()).length;
        estatisticas.set("livros_disponiveis", livrosDisponiveis);

        return estatisticas;
    }
}