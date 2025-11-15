import { VendaController } from './negocio/controllers/VendaController';
import { RelatorioController } from './negocio/controllers/RelatorioController';

console.log("=== TESTE DA PARTE 2 - NEGOCIO ===");

try {
    const vendaController = new VendaController();
    const relatorioController = new RelatorioController();

    console.log("\n1. Clientes cadastrados:");
    const clientes = vendaController.getClienteController().listarTodos();
    clientes.forEach(cliente => {
        console.log(`ID ${cliente.getId()}: ${cliente.getNome()}`);
    });

    console.log("\n2. Livros disponiveis:");
    const livros = vendaController.getProdutoController().listarTodos();
    livros.forEach((livro, id) => {
        console.log(`ID ${id}: ${livro.getNome()} - Estoque: ${livro.getQuantidadeEstoque()}`);
    });

    console.log("\n3. Criando venda...");
    const resultadoVenda = vendaController.iniciarVenda(1);
    if (resultadoVenda.sucesso) {
        console.log(`Venda criada com ID: ${resultadoVenda.vendaId}`);
        
        console.log("\n4. Adicionando itens:");
        const resultadoItem1 = vendaController.adicionarItemVenda(resultadoVenda.vendaId!, 1, 2);
        console.log(`Item 1: ${resultadoItem1.sucesso ? 'Sucesso' : 'Erro'}`);
        
        const resultadoItem2 = vendaController.adicionarItemVenda(resultadoVenda.vendaId!, 2, 1);
        console.log(`Item 2: ${resultadoItem2.sucesso ? 'Sucesso' : 'Erro'}`);

        console.log("\n5. Finalizando venda...");
        const resultadoFinalizacao = vendaController.finalizarVenda(resultadoVenda.vendaId!);
        
        if (resultadoFinalizacao.sucesso) {
            console.log("Venda finalizada com sucesso!");
            const vendaDetalhes = vendaController.buscarVendaPorId(resultadoVenda.vendaId!);
            console.log(`Total: R$ ${vendaDetalhes.total.toFixed(2)}`);
        } else {
            console.log("Erro:", resultadoFinalizacao.erros);
        }
    }

    console.log("\n6. Listando vendas:");
    const vendas = vendaController.listarVendas();
    console.log(`Total de vendas: ${vendas.length}`);

    console.log("\n7. Relatorios:");
    relatorioController.exibirRelatorioCompleto();

    console.log("\nPARTE 2 FUNCIONANDO!");

} catch (error) {
    console.log("ERRO:", error);
}

console.log("\n=== FIM DO TESTE ===");