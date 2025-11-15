import { Venda } from '../models/Venda';
import { Livro } from '../../core/models/Livro';

export class VendaValidator {
    
    public static validarEstoque(livro: Livro, quantidade: number): { valido: boolean; erro?: string } {
        if (!livro.verificarDisponibilidade()) {
            return { valido: false, erro: `Livro sem estoque disponivel` };
        }
        
        if (quantidade > livro.getQuantidadeEstoque()) {
            return { 
                valido: false, 
                erro: `Quantidade excede estoque disponivel` 
            };
        }
        
        return { valido: true };
    }

    public static validarCliente(cliente: any): { valido: boolean; erro?: string } {
        if (!cliente.ativo) {
            return { valido: false, erro: 'Cliente inativo' };
        }
        
        if (cliente.possuiPendencias) {
            return { valido: false, erro: 'Cliente possui pendencias' };
        }
        
        return { valido: true };
    }

    public static validarVendaCompleta(venda: Venda): { valido: boolean; erros: string[] } {
        const erros: string[] = [];

        const validacaoCliente = this.validarCliente(venda.getCliente());
        if (!validacaoCliente.valido) {
            erros.push(validacaoCliente.erro!);
        }

        if (venda.getItens().length === 0) {
            erros.push('Venda deve conter itens');
        }

        venda.getItens().forEach(item => {
            const validacaoEstoque = this.validarEstoque(item.livro, item.quantidade);
            if (!validacaoEstoque.valido) {
                erros.push(validacaoEstoque.erro!);
            }
        });

        return {
            valido: erros.length === 0,
            erros
        };
    }
}