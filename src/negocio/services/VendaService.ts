import { Venda } from '../models/Venda';
import { Cliente } from '../models/Cliente';
import { Livro } from '../../core/models/Livro';
import { VendaValidator } from '../validators/VendaValidator';
import { EstoqueService } from './EstoqueService';

export class VendaService {
    private vendas: Map<number, Venda> = new Map();
    private proximoId: number = 1;
    private estoqueService: EstoqueService;

    constructor() {
        this.estoqueService = new EstoqueService();
    }

    public criarVenda(cliente: Cliente): Venda {
        const venda = new Venda(this.proximoId++, cliente);
        this.vendas.set(venda.getId(), venda);
        return venda;
    }

    public adicionarItemVenda(vendaId: number, livro: Livro, quantidade: number): { sucesso: boolean; erro?: string } {
        const venda = this.vendas.get(vendaId);
        if (!venda) {
            return { sucesso: false, erro: 'Venda nao encontrada' };
        }

        const validacao = VendaValidator.validarEstoque(livro, quantidade);
        if (!validacao.valido) {
            return { sucesso: false, erro: validacao.erro };
        }

        venda.adicionarItem(livro, quantidade);
        return { sucesso: true };
    }

    public finalizarVenda(vendaId: number): { sucesso: boolean; venda?: Venda; erros?: string[] } {
        const venda = this.vendas.get(vendaId);
        if (!venda) {
            return { sucesso: false, erros: ['Venda nao encontrada'] };
        }

        const validacao = VendaValidator.validarVendaCompleta(venda);
        if (!validacao.valido) {
            return { sucesso: false, erros: validacao.erros };
        }

        this.estoqueService.atualizarEstoqueVenda(venda.getItens());
        venda.finalizarVenda();

        return { sucesso: true, venda };
    }

    public buscarVendaPorId(id: number): Venda | null {
        return this.vendas.get(id) || null;
    }

    public listarVendas(): Venda[] {
        return Array.from(this.vendas.values());
    }

    public getVendasConcluidas(): Venda[] {
        return this.listarVendas().filter(venda => venda.getStatus() === 'CONCLUIDA');
    }
}