export class CategoriaService {
    private categorias: Set<string> = new Set();

    public adicionarCategoria(categoria: string): void {
        this.categorias.add(categoria.toLowerCase());
    }

    public removerCategoria(categoria: string): boolean {
        return this.categorias.delete(categoria.toLowerCase());
    }

    public listarCategorias(): string[] {
        return Array.from(this.categorias).sort();
    }

    public categorizarProduto(categoria: string): string {
        const categoriaNormalizada = categoria.toLowerCase();
        
        const mapeamento: { [key: string]: string } = {
            'romance': 'romance',
            'ficção': 'ficcao',
            'ficcao': 'ficcao',
            'drama': 'drama',
            'aventura': 'aventura',
            'tecnologia': 'tecnologia',
            'programação': 'tecnologia',
            'programacao': 'tecnologia',
            'infantil': 'infantil'
        };

        return mapeamento[categoriaNormalizada] || categoriaNormalizada;
    }

    public getEstatisticasCategorias(produtos: any[]): Map<string, number> {
        const estatisticas = new Map<string, number>();
        
        this.categorias.forEach(categoria => {
            const count = produtos.filter(produto => 
                produto.getCategoria().toLowerCase() === categoria
            ).length;
            estatisticas.set(categoria, count);
        });

        return estatisticas;
    }
}