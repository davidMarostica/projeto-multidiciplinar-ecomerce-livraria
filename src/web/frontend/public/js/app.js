let vendaAtualId = null;
let itensVenda = [];

// Navegacao entre secoes
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName + '-section').classList.add('active');
}

// Livros
async function carregarLivros() {
    try {
        const response = await fetch('/api/livros');
        const livros = await response.json();
        
        const container = document.getElementById('lista-livros');
        container.innerHTML = '';
        
        livros.forEach(livro => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${livro.nome}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Preco:</strong> R$ ${livro.preco.toFixed(2)}</p>
                <p><strong>Estoque:</strong> ${livro.estoque}</p>
                <p><strong>Categoria:</strong> ${livro.categoria}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        alert('Erro ao carregar livros: ' + error.message);
    }
}

function filtrarLivros() {
    const termo = document.getElementById('buscarLivro').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const texto = card.textContent.toLowerCase();
        card.style.display = texto.includes(termo) ? 'block' : 'none';
    });
}

// Clientes
async function carregarClientes() {
    try {
        const response = await fetch('/api/clientes');
        const clientes = await response.json();
        
        const container = document.getElementById('lista-clientes');
        container.innerHTML = '';
        
        clientes.forEach(cliente => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${cliente.nome}</h3>
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Telefone:</strong> ${cliente.telefone}</p>
                <p><strong>Status:</strong> ${cliente.ativo ? 'Ativo' : 'Inativo'}</p>
            `;
            container.appendChild(card);
        });
        
        // Preencher select de clientes para vendas
        const selectCliente = document.getElementById('select-cliente');
        selectCliente.innerHTML = '';
        clientes.filter(c => c.ativo).forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.textContent = cliente.nome;
            selectCliente.appendChild(option);
        });
    } catch (error) {
        alert('Erro ao carregar clientes: ' + error.message);
    }
}

// Vendas
async function carregarLivrosVenda() {
    try {
        const response = await fetch('/api/livros');
        const livros = await response.json();
        
        const selectLivro = document.getElementById('select-livro');
        selectLivro.innerHTML = '';
        
        livros.filter(l => l.estoque > 0).forEach(livro => {
            const option = document.createElement('option');
            option.value = livro.id;
            option.textContent = `${livro.nome} - R$ ${livro.preco.toFixed(2)} (Estoque: ${livro.estoque})`;
            selectLivro.appendChild(option);
        });
    } catch (error) {
        alert('Erro ao carregar livros para venda: ' + error.message);
    }
}

async function iniciarVenda() {
    const clienteId = document.getElementById('select-cliente').value;
    
    if (!clienteId) {
        alert('Selecione um cliente');
        return;
    }
    
    try {
        const response = await fetch('/api/vendas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clienteId: parseInt(clienteId) })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            vendaAtualId = data.vendaId;
            itensVenda = [];
            document.getElementById('venda-atual').innerHTML = `
                <h4>Venda Iniciada - ID: ${vendaAtualId}</h4>
                <p>Adicione itens usando o formulario abaixo</p>
            `;
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (error) {
        alert('Erro ao iniciar venda: ' + error.message);
    }
}

async function adicionarItemVenda() {
    if (!vendaAtualId) {
        alert('Inicie uma venda primeiro');
        return;
    }
    
    const livroId = document.getElementById('select-livro').value;
    const quantidade = document.getElementById('quantidade-venda').value;
    
    if (!livroId || !quantidade) {
        alert('Preencha todos os campos');
        return;
    }
    
    try {
        const response = await fetch(`/api/vendas/${vendaAtualId}/itens`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                livroId: parseInt(livroId), 
                quantidade: parseInt(quantidade) 
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            itensVenda.push({ livroId: parseInt(livroId), quantidade: parseInt(quantidade) });
            alert('Item adicionado com sucesso!');
            document.getElementById('quantidade-venda').value = '1';
        } else {
            alert('Erro: ' + data.error);
        }
    } catch (error) {
        alert('Erro ao adicionar item: ' + error.message);
    }
}

async function finalizarVenda() {
    if (!vendaAtualId) {
        alert('Nenhuma venda em andamento');
        return;
    }
    
    try {
        const response = await fetch(`/api/vendas/${vendaAtualId}/finalizar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Venda finalizada com sucesso! Total: R$ ' + data.venda.total.toFixed(2));
            vendaAtualId = null;
            itensVenda = [];
            document.getElementById('venda-atual').innerHTML = '';
        } else {
            alert('Erros: ' + data.errors.join(', '));
        }
    } catch (error) {
        alert('Erro ao finalizar venda: ' + error.message);
    }
}

// Relatorios
async function carregarRelatorios() {
    try {
        const response = await fetch('/api/relatorios/completo');
        const relatorio = await response.json();
        
        const container = document.getElementById('relatorio-conteudo');
        container.innerHTML = '';
        
        // Vendas
        const vendasDiv = document.createElement('div');
        vendasDiv.className = 'relatorio-item';
        vendasDiv.innerHTML = '<h4>Vendas</h4>';
        for (const [key, value] of Object.entries(relatorio.vendas)) {
            vendasDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
        container.appendChild(vendasDiv);
        
        // Estoque
        const estoqueDiv = document.createElement('div');
        estoqueDiv.className = 'relatorio-item';
        estoqueDiv.innerHTML = '<h4>Estoque</h4>';
        for (const [key, value] of Object.entries(relatorio.estoque)) {
            estoqueDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
        container.appendChild(estoqueDiv);
        
        // Clientes
        const clientesDiv = document.createElement('div');
        clientesDiv.className = 'relatorio-item';
        clientesDiv.innerHTML = '<h4>Clientes</h4>';
        for (const [key, value] of Object.entries(relatorio.clientes)) {
            clientesDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
        container.appendChild(clientesDiv);
        
        container.innerHTML += `<p><em>Relatorio gerado em: ${relatorio.dataGeracao}</em></p>`;
        
    } catch (error) {
        alert('Erro ao carregar relatorios: ' + error.message);
    }
}

// Inicializacao
document.addEventListener('DOMContentLoaded', function() {
    carregarLivros();
    carregarClientes();
    carregarLivrosVenda();
});