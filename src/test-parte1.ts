import { ProdutoController } from './core/controllers/ProdutoController';
import { Livro } from './core/models/Livro';

console.log("=== TESTE DA PARTE 1 - CORE ===");

const controller = new ProdutoController();

// Teste 1: Listar todos os livros
console.log("\n1. Lista de livros cadastrados:");
const livros = controller.listarTodos();
livros.forEach((livro, id) => {
    console.log(`ID ${id}: ${livro.getNome()} - R$ ${livro.getPreco()}`);
});

// Teste 2: Buscar por ID
console.log("\n2. Buscar livro por ID (1):");
const livro = controller.buscarPorId(1);
if (livro) {
    console.log(livro.exibirDetalhes());
}

// Teste 3: Buscar por nome
console.log("\n3. Buscar por nome 'Dom':");
const resultadosNome = controller.buscarPorNome("Dom");
resultadosNome.forEach(livro => {
    console.log(`- ${livro.getNome()} por ${livro.getAutor()}`);
});

// Teste 4: Buscar por categoria
console.log("\n4. Buscar por categoria 'romance':");
const resultadosCategoria = controller.buscarPorCategoria("romance");
resultadosCategoria.forEach(livro => {
    console.log(`- ${livro.getNome()}`);
});

// Teste 5: Estatisticas
console.log("\n5. Estatisticas do sistema:");
const estatisticas = controller.getEstatisticas();
estatisticas.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
});

// Teste 6: Categorias
console.log("\n6. Categorias disponiveis:");
const categorias = controller.getCategorias();
console.log(categorias.join(", "));

// Teste 7: Cadastrar novo livro
console.log("\n7. Cadastrar novo livro:");
const novoLivro = new Livro(0, "Novo Livro Teste", 50.00, 8, "aventura", "Autor Teste", "Editora Teste", 200, "978-0000000000");
const livroCriado = controller.cadastrar(novoLivro);
console.log(`Livro cadastrado com ID: ${livroCriado.getId()}`);

console.log("\n=== FIM DO TESTE DA PARTE 1 ===");