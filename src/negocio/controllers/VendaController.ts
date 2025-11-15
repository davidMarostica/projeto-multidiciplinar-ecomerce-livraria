import { VendaService } from '../services/VendaService';
import { ClienteController } from './ClienteController';
import { ProdutoController } from '../../core/controllers/ProdutoController';
import { RegrasNegocioService } from '../services/RegrasNegocioService';

export class VendaController {
    private vendaService: VendaService;
    private clienteController: ClienteController;
    private produtoController: ProdutoController;

    constructor() {
        this.vendaService = new VendaService();
        this.clienteController = new ClienteController();
        this.produtoController = new ProdutoController();
    }

    public iniciarVenda(clienteId: number): { sucesso: boolean; vendaId?: number; erro?: string } {
        const cliente = this.clienteController.buscarPorId(clienteId);
        if (!cliente) {
            return { sucesso: false, erro: 'Cliente nao encontrado' };
        }

        const venda = this.vendaService.criarVenda(cliente);
        return { sucesso: true, vendaId: venda.getId() };
    }

    public adicionarItemVenda(vendaId: number, livroId: number, quantidade: number): { sucesso: boolean; erro?: string } {
        const livro = this.produtoController.buscarPorId(livroId);
        if (!livro) {
            return { sucesso: false, erro: 'Livro nao encontrado' };
        }

        return this.vendaService.adicionarItemVenda(vendaId, livro, quantidade);
    }

    public finalizarVenda(vendaId: number): { sucesso: boolean; venda?: any; erros?: string[] } {
        const venda = this.vendaService.buscarVendaPorId(vendaId);
        if (!venda) {
            return { sucesso: false, erros: ['Venda nao encontrada'] };
        }

        const valorSubtotal = venda.getSubtotal();
        const descontoSugerido = RegrasNegocioService.calcularDescontoProgressivo(valorSubtotal);
        
        venda.aplicarDescontoPercentual(descontoSugerido);
        return this.vendaService.finalizarVenda(vendaId);
    }

    public buscarVendaPorId(id: number): any {
        const venda = this.vendaService.buscarVendaPorId(id);
        if (!venda) return null;

        return {
            id: venda.getId(),
            cliente: venda.getCliente().getNome(),
            total: venda.getTotal()
        };
    }

    public listarVendas(): any[] {
        return this.vendaService.listarVendas().map(venda => this.buscarVendaPorId(venda.getId()));
    }

    public getClienteController(): ClienteController {
        return this.clienteController;
    }

    public getProdutoController(): ProdutoController {
        return this.produtoController;
    }
}