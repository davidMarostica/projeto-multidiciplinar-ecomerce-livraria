import { VendaController } from './VendaController';
import { ProdutoController } from '../../core/controllers/ProdutoController';
import { EstoqueService } from '../services/EstoqueService';

export class RelatorioController {
    private vendaController: VendaController;
    private produtoController: ProdutoController;
    private estoqueService: EstoqueService;

    constructor() {
        this.vendaController = new VendaController();
        this.produtoController = new ProdutoController();
        this.estoqueService = new EstoqueService();
    }

    public gerarRelatorioVendas(): Map<string, any> {
        const relatorio = new Map<string, any>();
        
        const vendas = this.vendaController.listarVendas();
        const vendasConcluidas = vendas.filter(v => v.total > 0);
        
        relatorio.set('total_vendas', vendasConcluidas.length);
        
        const totalReceita = vendasConcluidas.reduce((total, venda) => total + venda.total, 0);
        relatorio.set('total_receita', parseFloat(totalReceita.toFixed(2)));

        const mediaVenda = vendasConcluidas.length > 0 ? totalReceita / vendasConcluidas.length : 0;
        relatorio.set('media_venda', parseFloat(mediaVenda.toFixed(2)));

        return relatorio;
    }

    public gerarRelatorioEstoque(): Map<string, any> {
        const relatorio = new Map<string, any>();
        
        const livros = Array.from(this.produtoController.listarTodos().values());
        
        const totalLivros = livros.length;
        relatorio.set('total_livros', totalLivros);
        
        const totalEstoque = livros.reduce((total, livro) => total + livro.getQuantidadeEstoque(), 0);
        relatorio.set('total_estoque', totalEstoque);
        
        const valorTotalEstoque = livros.reduce((total, livro) => 
            total + (livro.getPreco() * livro.getQuantidadeEstoque()), 0
        );
        relatorio.set('valor_total_estoque', parseFloat(valorTotalEstoque.toFixed(2)));

        const estoqueBaixo = livros.filter(livro => livro.getQuantidadeEstoque() <= 3);
        relatorio.set('estoque_baixo', estoqueBaixo.length);

        return relatorio;
    }

    public gerarRelatorioClientes(): Map<string, any> {
        const relatorio = new Map<string, any>();
        const clienteController = this.vendaController.getClienteController();
        
        const clientes = clienteController.listarTodos();
        relatorio.set('total_clientes', clientes.length);

        const clientesAtivos = clienteController.getClientesAtivos();
        relatorio.set('clientes_ativos', clientesAtivos.length);

        return relatorio;
    }

    public gerarRelatorioCompleto(): Map<string, any> {
        const relatorio = new Map<string, any>();
        
        relatorio.set('vendas', this.gerarRelatorioVendas());
        relatorio.set('estoque', this.gerarRelatorioEstoque());
        relatorio.set('clientes', this.gerarRelatorioClientes());
        relatorio.set('data_geracao', new Date().toLocaleString());

        return relatorio;
    }

    public exibirRelatorioCompleto(): void {
        console.log("=== RELATORIO COMPLETO ===");
        
        const relatorio = this.gerarRelatorioCompleto();
        
        console.log("\n--- VENDAS ---");
        const relatorioVendas = relatorio.get('vendas');
        relatorioVendas.forEach((valor: any, chave: string) => {
            console.log(`${chave}: ${valor}`);
        });

        console.log("\n--- ESTOQUE ---");
        const relatorioEstoque = relatorio.get('estoque');
        relatorioEstoque.forEach((valor: any, chave: string) => {
            console.log(`${chave}: ${valor}`);
        });

        console.log("\n--- CLIENTES ---");
        const relatorioClientes = relatorio.get('clientes');
        relatorioClientes.forEach((valor: any, chave: string) => {
            console.log(`${chave}: ${valor}`);
        });

        console.log(`\nData de geracao: ${relatorio.get('data_geracao')}`);
    }
}