import express from 'express';
import cors from 'cors';
import { ProdutoController } from '../../core/controllers/ProdutoController';
import { VendaController } from '../../negocio/controllers/VendaController';
import { RelatorioController } from '../../negocio/controllers/RelatorioController';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('src/web/frontend/public'));

const produtoController = new ProdutoController();
const vendaController = new VendaController();
const relatorioController = new RelatorioController();

// Rotas para Livros
app.get('/api/livros', (req, res) => {
    try {
        const livros = produtoController.listarTodos();
        const livrosArray = Array.from(livros.values()).map(livro => ({
            id: livro.getId(),
            nome: livro.getNome(),
            preco: livro.getPreco(),
            estoque: livro.getQuantidadeEstoque(),
            categoria: livro.getCategoria(),
            autor: livro.getAutor(),
            editora: livro.getEditora()
        }));
        res.json(livrosArray);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
});

app.get('/api/livros/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const livro = produtoController.buscarPorId(id);
        
        if (livro) {
            res.json({
                id: livro.getId(),
                nome: livro.getNome(),
                preco: livro.getPreco(),
                estoque: livro.getQuantidadeEstoque(),
                categoria: livro.getCategoria(),
                autor: livro.getAutor(),
                editora: livro.getEditora(),
                paginas: livro.getNumeroPaginas(),
                isbn: livro.getIsbn()
            });
        } else {
            res.status(404).json({ error: 'Livro nao encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro' });
    }
});

// Rotas para Clientes
app.get('/api/clientes', (req, res) => {
    try {
        const clientes = vendaController.getClienteController().listarTodos();
        const clientesArray = clientes.map(cliente => ({
            id: cliente.getId(),
            nome: cliente.getNome(),
            email: cliente.getEmail(),
            telefone: cliente.getTelefone(),
            ativo: cliente.ativo
        }));
        res.json(clientesArray);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Rotas para Vendas
app.post('/api/vendas', (req, res) => {
    try {
        const { clienteId } = req.body;
        const resultado = vendaController.iniciarVenda(clienteId);
        
        if (resultado.sucesso) {
            res.json({ vendaId: resultado.vendaId });
        } else {
            res.status(400).json({ error: resultado.erro });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar venda' });
    }
});

app.post('/api/vendas/:id/itens', (req, res) => {
    try {
        const vendaId = parseInt(req.params.id);
        const { livroId, quantidade } = req.body;
        
        const resultado = vendaController.adicionarItemVenda(vendaId, livroId, quantidade);
        
        if (resultado.sucesso) {
            res.json({ message: 'Item adicionado com sucesso' });
        } else {
            res.status(400).json({ error: resultado.erro });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar item' });
    }
});

app.post('/api/vendas/:id/finalizar', (req, res) => {
    try {
        const vendaId = parseInt(req.params.id);
        const resultado = vendaController.finalizarVenda(vendaId);
        
        if (resultado.sucesso) {
            res.json({ 
                message: 'Venda finalizada com sucesso',
                venda: resultado.venda 
            });
        } else {
            res.status(400).json({ errors: resultado.erros });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao finalizar venda' });
    }
});

// Rotas para Relatorios
app.get('/api/relatorios/completo', (req, res) => {
    try {
        const relatorio = relatorioController.gerarRelatorioCompleto();
        
        const relatorioObj = {
            vendas: Object.fromEntries(relatorio.get('vendas')),
            estoque: Object.fromEntries(relatorio.get('estoque')),
            clientes: Object.fromEntries(relatorio.get('clientes')),
            dataGeracao: relatorio.get('data_geracao')
        };
        
        res.json(relatorioObj);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar relatorio' });
    }
});

app.get('/api/relatorios/vendas', (req, res) => {
    try {
        const relatorio = relatorioController.gerarRelatorioVendas();
        res.json(Object.fromEntries(relatorio));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar relatorio de vendas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Acesse: http://localhost:${port}`);
});